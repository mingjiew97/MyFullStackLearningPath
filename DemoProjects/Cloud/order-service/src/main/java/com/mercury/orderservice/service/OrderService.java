package com.mercury.orderservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.orderservice.bean.Order;
import com.mercury.orderservice.dao.OrderDao;
import com.mercury.orderservice.jms.OrdersReportProducer;
import com.mercury.orderservice.kafka.OrderProcessService;

@Service
@Transactional
public class OrderService {

	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private OrdersReportProducer ordersReportProducer;
	
	@Autowired
	private OrderProcessService orderProcessService;
	
	public List<Order> getAllOrders() {
		return orderDao.findAll();
	}
	
	public Order getOneOrder(long id) {
		return orderDao.findById(id).get(); // TODO: optional with validation.
	}
	
	public ResponseEntity<Boolean> addOneOrder(Order order) {
		// TODO: add order's user_id/product_id verification by checking with auth/product microservice.
		// RULE 1: product must exists
		// RULE 2: user can only add order for itself.
		orderDao.save(order);
		// TODO: send to shipping-service for shipping.
		// TODO: send to email-service for notification.
		orderProcessService.processOrder(order);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	public void generateReportForAllOrders() {
		ordersReportProducer.sendOrdersForReport(orderDao.findAll());
	}
	
}
