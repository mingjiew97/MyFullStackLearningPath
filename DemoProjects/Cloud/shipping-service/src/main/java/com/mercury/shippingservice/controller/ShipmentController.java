package com.mercury.shippingservice.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.common.bean.Order;

@RestController
public class ShipmentController {
	
	@Resource
	List<Order> ordersToShip;

	@GetMapping("/orders")
	public List<Order> getShipments(){
		return ordersToShip;
	}
	
	@GetMapping("/orders/flush")
	public ResponseEntity<Boolean> getShipmentsFlush(){
		ordersToShip.removeAll(ordersToShip);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
}
