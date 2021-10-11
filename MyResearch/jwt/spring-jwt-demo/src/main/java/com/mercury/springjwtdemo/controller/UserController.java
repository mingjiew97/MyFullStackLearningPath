package com.mercury.springjwtdemo.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.springjwtdemo.bean.User;

@RestController
public class UserController {

	@GetMapping("/users/me")
	@PreAuthorize("hasRole('USER')")
	public User getCurrentUser(@AuthenticationPrincipal User currentUser) {
		return currentUser;
	}
	
}
