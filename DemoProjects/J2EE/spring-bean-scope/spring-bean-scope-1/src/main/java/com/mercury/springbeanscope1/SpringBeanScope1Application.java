package com.mercury.springbeanscope1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.mercury"})
public class SpringBeanScope1Application {
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBeanScope1Application.class, args);
	}

}

