package com.mercury.awssmsdemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.awssmsdemo.service.SMSService;

@RestController
public class HelloController {

	@Autowired
	SMSService smsService;
	
	@GetMapping("/hello/{phoneNumber}/{message}")
	public void hello(@PathVariable String phoneNumber, @PathVariable String message) {
		smsService.sendSMS(phoneNumber, message);
	}
	
}
