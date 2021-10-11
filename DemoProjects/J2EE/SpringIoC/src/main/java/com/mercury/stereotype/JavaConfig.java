package com.mercury.stereotype;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.mercury.stereotype.beans.Book;

@Configuration
@ComponentScan(basePackages={"com.mercury.stereotype.beans"})
public class JavaConfig {
	
	@Autowired
	@Qualifier("historyBook")
	Book book;
	
	@Bean
	public Set<String> emails() {
		Set<String> emails = new HashSet<>();
		emails.add("bob@gmail.com");
		emails.add("bob@icloud.com");
		return emails;
	}
	
}
