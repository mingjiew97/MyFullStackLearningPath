package com.mercury.emailservice.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.common.bean.Order;

@RestController
public class EmailController {
	@Resource
	List<Order> ordersToEmail;

	@GetMapping("/orders")
	public List<Order> getOrdersToEmail() {
		return ordersToEmail;
	}
	
	@GetMapping("/orders/flush")
	public ResponseEntity<Boolean> getOrdersToEmailFlush(){
		ordersToEmail.removeAll(ordersToEmail);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
}
