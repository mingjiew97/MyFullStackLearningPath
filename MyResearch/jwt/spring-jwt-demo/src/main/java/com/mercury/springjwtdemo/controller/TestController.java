package com.mercury.springjwtdemo.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.springjwtdemo.response.Response;

@RestController
public class TestController {

	@GetMapping("/public_content")
	public Response getPublicContent() {
		return new Response(true, "Public content is visible to everyone! Hi Jenkins!");
	}
	
	@GetMapping("/user_content")
	@PreAuthorize("isAuthenticated()")
	public Response getUserContent() {
		return new Response(true, "User content is visible to logged in users!");
	}
	
	@GetMapping("/admin_content")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public Response getAdminContent() {
		return new Response(true, "Admin content is visible to administractors only!");
	}
	
}
