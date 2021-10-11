package com.mercury.springbeanscope2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.mercury"})
public class SpringBeanScope2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBeanScope2Application.class, args);
	}

}
