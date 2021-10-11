package com.mercury.reportingservice.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.common.bean.Order;

@RestController
public class ReportController {
	
	@Resource
	private List<List<Order>> ordersForReport;

	@GetMapping("/orders")
	public List<List<Order>> getOrdersForReport() {
		return ordersForReport;
	}
	
	@GetMapping("/orders/flush")
	public ResponseEntity<Boolean> getReportsFlush(){
		ordersForReport.removeAll(ordersForReport);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
}
