package com.mercury.awssmsdemo.service;

import org.springframework.stereotype.Service;

import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.sns.SnsClient;
import software.amazon.awssdk.services.sns.model.PublishRequest;
import software.amazon.awssdk.services.sns.model.PublishResponse;

@Service
public class SMSService {

	public void sendSMS(String phoneNumber, String message) {
		phoneNumber = phoneNumber.contains("+1") ? phoneNumber : "+1" + phoneNumber;
		SnsClient snsClient = SnsClient.builder().region(Region.US_EAST_1).build();
		PublishRequest request = PublishRequest.builder().message(message).phoneNumber(phoneNumber).build();
		PublishResponse result = snsClient.publish(request);
		System.out.println(result.messageId() + " Message sent. Status was " + result);
	}

}
