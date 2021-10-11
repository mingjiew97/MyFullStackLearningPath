package com.mercury.SpringBootRESTDemo.scheduling;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.mercury.SpringBootRESTDemo.service.ProductService;

@Component
public class ProductsReportTask {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Autowired
	ProductService productService;

	// generate products report at 00:01 daily
	@Scheduled(cron = "0 1 0 * * *")
	public void generateReportDaily() {
		productService.generateProductsReportLocally();
		LOGGER.info("Generated Products Report for " + LocalDate.now() + " at: " + LocalDateTime.now());
	}

	// generate products report at 00:01 on first day of every month
	@Scheduled(cron = "0 1 0 1 * *")
	public void generateReportMonthly() {
		productService.generateProductsReportLocally();
		LOGGER.info("Generated Products Report for " + LocalDate.now() + " at: " + LocalDateTime.now());
	}
	
	// @Scheduled(fixedRate=2000) // every two seconds do something
	// @Scheduled(fixedDelay=2000) // every other two seconds do something

}
