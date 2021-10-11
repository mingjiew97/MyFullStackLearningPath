package com.mercury.orderservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@Configuration
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
//			.antMatchers(HttpMethod.GET, "/").permitAll();
			.antMatchers(HttpMethod.GET, "/").hasAnyRole("ADMIN"); // as for now, only allow admin to get all orders.
	}

	/*
	 * intercept request from feign client to carry Authorization header.
	 */
//	@Bean
//	public RequestInterceptor requestTokenBearerInterceptor() {
//		return new RequestInterceptor() {
//			@Override
//			public void apply(RequestTemplate requestTemplate) {
//				OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) SecurityContextHolder.getContext()
//						.getAuthentication().getDetails();
//				requestTemplate.header("Authorization", "bearer " + details.getTokenValue());
//			}
//		};
//	}

}
