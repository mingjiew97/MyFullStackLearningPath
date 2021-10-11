package com.alexgao.restapi.aws;

import org.springframework.stereotype.Component;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

@Component
public class PostUsersHanlder implements RequestHandler<UserRequest, UserResponse> {

	@Override
	public UserResponse handleRequest(UserRequest req, Context arg1) {
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().withRegion(Regions.US_WEST_2).build();
		DynamoDB dynamoDB = new DynamoDB(client);
		Table table = dynamoDB.getTable("users");
		Item item = new Item()
				.withString("name", req.getName())
				.withString("email", req.getEmail())
				.withString("password", req.getPassword());
		table.putItem(item);
		return new UserResponse(true, req.getName(), "User saved successfully!");
	}

}
