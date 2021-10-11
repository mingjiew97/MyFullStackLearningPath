package com.mercury.shippingservice.kafka;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.mercury.common.bean.Order;

@Component
public class OrderProcessListener {
	
	@Resource
	List<Order> ordersToShip;

	@KafkaListener(topics = "orders")
	public void handle(Order order) {
		ordersToShip.add(order);
	}

}
