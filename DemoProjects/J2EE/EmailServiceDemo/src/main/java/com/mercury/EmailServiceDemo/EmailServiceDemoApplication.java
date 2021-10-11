package com.mercury.EmailServiceDemo;

import java.util.Arrays;

import javax.jms.ConnectionFactory;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;

@SpringBootApplication
public class EmailServiceDemoApplication {
	
	@Value("${jms.broker-url}")
    private String jmsBrokerUrl;

    @Value("${jms.user}")
    private String jmsUser;

    @Value("${jms.password}")
    private String jmsPassword;
    
    @Bean
    public ConnectionFactory connectionFactory(){
        ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory();
        connectionFactory.setBrokerURL(jmsBrokerUrl);
        connectionFactory.setUserName(jmsUser);
        connectionFactory.setPassword(jmsPassword);
        connectionFactory.setTrustedPackages(Arrays.asList("org.springframework.mail"));
        return connectionFactory;
    }
    
    @Bean(name = "emailContainer")
    public DefaultJmsListenerContainerFactory jmsQueueListenerContainerFactory() {
        DefaultJmsListenerContainerFactory factory =
                new DefaultJmsListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory());
        factory.setConcurrency("3-10");
        factory.setRecoveryInterval(1000L);
        return factory;
    }

	public static void main(String[] args) {
		SpringApplication.run(EmailServiceDemoApplication.class, args);
	}
}
