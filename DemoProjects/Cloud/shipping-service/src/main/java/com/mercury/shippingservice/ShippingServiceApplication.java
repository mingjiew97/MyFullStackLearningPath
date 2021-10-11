package com.mercury.shippingservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.mercury.common.bean.Order;

@SpringBootApplication
@EnableDiscoveryClient
public class ShippingServiceApplication {
	
	// temp array to store orders for shipping
	// will consider to DB for persistence
	@Bean(name="ordersToShip")
	public List<Order> orders() {
		return new ArrayList<>();
	}

	public static void main(String[] args) {
		SpringApplication.run(ShippingServiceApplication.class, args);
	}
}
