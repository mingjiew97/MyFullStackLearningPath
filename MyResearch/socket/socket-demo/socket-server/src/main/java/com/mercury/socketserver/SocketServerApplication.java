package com.mercury.socketserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mercury.socketserver.service.StockService;

@SpringBootApplication
public class SocketServerApplication implements CommandLineRunner {
	
	@Autowired
	StockService stockService;

	public static void main(String[] args) {
		SpringApplication.run(SocketServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		stockService.sendStocks();
	}

}
