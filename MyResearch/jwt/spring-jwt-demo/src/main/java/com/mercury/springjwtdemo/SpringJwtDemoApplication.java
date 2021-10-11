package com.mercury.springjwtdemo;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mercury.springjwtdemo.bean.Authority;
import com.mercury.springjwtdemo.bean.User;
import com.mercury.springjwtdemo.service.UserService;

@SpringBootApplication
public class SpringJwtDemoApplication  implements CommandLineRunner{
	
	@Autowired
	UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(SpringJwtDemoApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		User admin = new User("Admin Test", "admin@msiop.com", "admin", "adminpass");
		Set<Authority> authorities = new HashSet<>();
		authorities.add(new Authority(1l));
		admin.setAuthorities(authorities);
		userService.register(admin);
		
		User user = new User("User Test", "user@msiop.com", "user", "userpass");
		userService.register(user);
	}

}
