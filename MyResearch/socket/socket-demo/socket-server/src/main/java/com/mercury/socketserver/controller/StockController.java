package com.mercury.socketserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import com.mercury.socketserver.service.StockService;

@Controller
public class StockController {
	
	@Autowired
	StockService stockService;
	
	@SubscribeMapping("/topic/stock")
	public String getStock() {
		return "You are subscribed to stock topic.";
	}

	@MessageMapping("/hello")
	@SendTo("/topic/chat")
	public String hello(String msg) {
		System.out.println(msg);
		return msg + " is handled by server.";
	}
}
