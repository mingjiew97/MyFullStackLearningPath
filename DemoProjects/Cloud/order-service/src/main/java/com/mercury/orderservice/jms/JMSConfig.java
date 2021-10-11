package com.mercury.orderservice.jms;

import javax.jms.ConnectionFactory;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.core.JmsTemplate;

@Configuration
public class JMSConfig {

	@Value("${jms.broker-url}")
	private String jmsBrokerUrl;

	@Value("${jms.user}")
	private String user;

	@Value("${jms.password}")
	private String password;

	@Bean
	public ConnectionFactory connectionFactory() {
		ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory();
		factory.setBrokerURL(jmsBrokerUrl);
		factory.setUserName(user);
		factory.setPassword(password);
		return factory;
	}

	@Bean
	public JmsTemplate jmsTemplate() {
		JmsTemplate jmsTemplate = new JmsTemplate(connectionFactory());
		jmsTemplate.setDefaultDestinationName("ordersReportQueue");
		return jmsTemplate;
	}

}
