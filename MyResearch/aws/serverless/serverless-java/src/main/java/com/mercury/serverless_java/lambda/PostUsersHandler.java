package com.mercury.serverless_java.lambda;

import java.util.UUID;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class PostUsersHandler implements RequestHandler<User, Response> {

	public Response handleRequest(User input, Context context) {
		try {
			AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().withRegion(Regions.US_EAST_2).build();
			DynamoDB dynamoDB = new DynamoDB(client);
			Table table = dynamoDB.getTable("users");
			
			Item item = new Item().withPrimaryKey("id", UUID.randomUUID().toString()).withString("name", input.getName())
					.withInt("age", input.getAge());
			table.putItem(item);
			return new Response(true, "User saved successfully!");
		} catch (Exception e) {
			return new Response(false, "User saved failed!" + e.getMessage());
		}
	}
}
