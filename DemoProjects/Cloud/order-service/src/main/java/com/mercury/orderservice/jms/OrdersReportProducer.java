package com.mercury.orderservice.jms;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.stereotype.Component;

import com.mercury.orderservice.bean.Order;

@Component
public class OrdersReportProducer {

	@Autowired
	private JmsTemplate jmsQueueTemplate;

	public void sendOrdersForReport(List<Order> orders) {
		List<com.mercury.common.bean.Order> marshalledOrders = orders.stream()
				.map(order -> new com.mercury.common.bean.Order(order.getId(), order.getTime(), order.getQuantity(), order.getProduct_id(), order.getUser_id()))
				.collect(Collectors.toList());
		jmsQueueTemplate.send("ordersReportQueue", new MessageCreator() {
			@Override
			public Message createMessage(Session session) throws JMSException {
				return session.createObjectMessage((Serializable) marshalledOrders);
			}
		});
	}

}
