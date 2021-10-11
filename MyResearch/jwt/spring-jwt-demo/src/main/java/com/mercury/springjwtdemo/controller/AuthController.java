package com.mercury.springjwtdemo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.springjwtdemo.bean.User;
import com.mercury.springjwtdemo.response.Response;
import com.mercury.springjwtdemo.service.UserService;

@RestController
public class AuthController {

	@Autowired
	UserService userService;

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
		Response res = userService.register(user);
		return generateResponse(res);
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		Response res = userService.login(user);
		return generateResponse(res);
	}

	@PostMapping("/logout")
	public ResponseEntity<?> logout(HttpServletRequest req) {
		Response res = userService.logout(req);
		return generateResponse(res);
	}
	
	@PostMapping("/refresh")
	@PreAuthorize("hasAnyRole('USER')")
	public ResponseEntity<?> refresh() {
		Response res = userService.refresh();
		return generateResponse(res);
	}
	
	// TODO: rewrite to use custom annotation. :)
	public ResponseEntity<?> generateResponse(Response res) {
		if (res.isSuccess()) {
			return ResponseEntity.ok(res);
		} else {
			return ResponseEntity.badRequest().body(res);
		}
	}
}
