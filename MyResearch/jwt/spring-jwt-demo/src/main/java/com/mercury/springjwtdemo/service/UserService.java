package com.mercury.springjwtdemo.service;

import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.springjwtdemo.bean.Authority;
import com.mercury.springjwtdemo.bean.User;
import com.mercury.springjwtdemo.config.JwtTokenProvider;
import com.mercury.springjwtdemo.dao.UserDao;
import com.mercury.springjwtdemo.response.JwtResponse;
import com.mercury.springjwtdemo.response.Response;

@Service
@Transactional
public class UserService {

	public static final Logger logger = LoggerFactory.getLogger(UserService.class);

	@Autowired
	UserDao userDao;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	RedisTemplate<String, String> redisTemplate;

	public User getUserById(Long id) {
		return userDao.findById(id).orElse(null);
	}

	public Response register(User user) {
		try {
			if(userDao.existsByUsername(user.getUsername())) {
				return new Response(false, "Username already exists!");
			}
			if(userDao.existsByEmail(user.getEmail())) {
				return new Response(false, "Email already exists!");
			}
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			if (user.getAuthorities().size() == 0) {
				// set user as ROLE_USER by default
				Set<Authority> authorities = new HashSet<>();
				authorities.add(new Authority(2l));
				user.setAuthorities(authorities);
			}
			userDao.save(user);
			return new Response(true, "Register successfully!");
		} catch (Exception e) {
			logger.error(e.getMessage());
			return new Response(false, "Register failed.");
		}
	}

	public Response login(User user) {
		try {
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsernameOrEmail(), user.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String token = jwtTokenProvider.generateToken(authentication);
			return new JwtResponse(true, "Login successfully!", token);
		} catch (AuthenticationException e) {
			e.printStackTrace();
			logger.error(e.getMessage());
			logger.error("Login failed for: " + user.getUsername());
			return new Response(false, "Login failed.");
		}
	}
	
	public Response logout(HttpServletRequest req) { 
		try {
			String token = jwtTokenProvider.getBearerToken(req);
			// add token to blacklist in Redis which will automatically expire after specified expiration time.
			long expireTime = jwtTokenProvider.getTokenExpireTime(token);
			redisTemplate.opsForValue().set(token, "access_token", Duration.of(expireTime, ChronoUnit.MILLIS));
			return new Response(true, "Logout successfully!");
		} catch (Exception e) {
			return new Response(false, "Logout failed.");
		}
	}
	
	public Response refresh() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			String token = jwtTokenProvider.generateToken(authentication);
			return new JwtResponse(true, "Refresh successfully!", token);
		} catch (AuthenticationException e) {
			logger.error("Refresh failed for: " + authentication.getName());
			return new Response(false, "Refresh failed.");
		}
	}

}
