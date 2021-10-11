package com.mercury.EmailServiceDemo.jms;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

import com.mercury.EmailServiceDemo.service.EmailService;

@Component
public class EmailConsumer {
	
	@Autowired
	EmailService emailService;
	
	@JmsListener(destination = "emailQueue", containerFactory = "emailContainer")
    public void receive(String msg){
        System.out.println("message: " + msg);
        emailService.sendSimpleMessage("robert.shi.msi@gmail.com", "test", msg);
    }
	
	@JmsListener(destination = "emailQueue", containerFactory = "emailContainer")
    public void receive(Message msg) throws JMSException{
		ObjectMessage objectMessage = (ObjectMessage) msg;
		SimpleMailMessage emailMsg = (SimpleMailMessage)objectMessage.getObject();
		System.out.println(emailMsg);
        emailService.sendSimpleMailMessage(emailMsg);
    }
	
}
