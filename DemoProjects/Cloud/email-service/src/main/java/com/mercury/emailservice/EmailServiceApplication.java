package com.mercury.emailservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.mercury.common.bean.Order;

@SpringBootApplication
public class EmailServiceApplication {
	
	@Bean(name="ordersToEmail")
	List<Order> ordersToEmail() {
		return new ArrayList<>();
	}

	public static void main(String[] args) {
		SpringApplication.run(EmailServiceApplication.class, args);
	}

}
