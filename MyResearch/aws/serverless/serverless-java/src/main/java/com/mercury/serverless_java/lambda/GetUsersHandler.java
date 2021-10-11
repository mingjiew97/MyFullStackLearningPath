package com.mercury.serverless_java.lambda;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.ItemCollection;
import com.amazonaws.services.dynamodbv2.document.ScanOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.document.spec.ScanSpec;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class GetUsersHandler implements RequestHandler<Object, List<User>> {

	public List<User> handleRequest(Object object, Context context) {
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().withRegion(Regions.US_EAST_2).build();
		DynamoDB dynamoDB = new DynamoDB(client);
		Table table = dynamoDB.getTable("users");
		ScanSpec scanSpec = new ScanSpec().withAttributesToGet("id", "name", "age");
		List<User> users = new ArrayList<User>();
		ItemCollection<ScanOutcome> items = table.scan(scanSpec);
		Iterator<Item> iter = items.iterator();
		while (iter.hasNext()) {
			Item item = iter.next();
			User user = new User(item.getString("id"), item.getString("name"), item.getInt("age"));
			users.add(user);
		}
		return users;
	}

}
