package com.mercury.reportingservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.mercury.common.bean.Order;

@SpringBootApplication
@EnableDiscoveryClient
public class ReportingServiceApplication {
	
	@Bean(name="ordersForReport")
	public List<List<Order>> ordersForReport() {
		return new ArrayList<>();
	}

	public static void main(String[] args) {
		SpringApplication.run(ReportingServiceApplication.class, args);
	}
}
