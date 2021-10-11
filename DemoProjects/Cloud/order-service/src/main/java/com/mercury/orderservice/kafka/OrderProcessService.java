package com.mercury.orderservice.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.mercury.orderservice.bean.Order;

@Service
public class OrderProcessService {

	private KafkaTemplate<String, com.mercury.common.bean.Order> kafkaTemplate;

	@Autowired
	public OrderProcessService(KafkaTemplate<String, com.mercury.common.bean.Order> kafkaTemplate) {
		this.kafkaTemplate = kafkaTemplate;
	}

	public void processOrder(Order order) {
		com.mercury.common.bean.Order marshalledOrder = new com.mercury.common.bean.Order(order.getId(), order.getTime(), order.getQuantity(), order.getProduct_id(), order.getUser_id());
		kafkaTemplate.send("orders", marshalledOrder);
	}

}
