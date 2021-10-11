package com.mercury.orderservice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mercury.common.bean.Product;
import com.mercury.orderservice.bean.Order;
import com.mercury.orderservice.feign.ProductServiceFeign;
import com.mercury.orderservice.service.OrderService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@RestController
public class OrderController {

	@Autowired
	OrderService orderService;

	@Autowired
	ProductServiceFeign productServiceFeign;

	@GetMapping("/")
	public List<Order> getOrders() {
		return orderService.getAllOrders();
	}

	// Demo for RestTemplate
	@GetMapping("/{id}/v1")
	public ResponseEntity<?> getOrderWithProduct1(@PathVariable long id) {
		Order order = orderService.getOneOrder(id);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("order", order);

		// use RestTemplate to get product from product-service
		final String product_uri = "http://localhost:8666/products/" + order.getProduct_id();
		RestTemplate restTemplate = new RestTemplate();
		Product product = restTemplate.getForObject(product_uri, Product.class);
		result.put("product", product);

		return new ResponseEntity<Map<String, Object>>(result, HttpStatus.OK);
	}

	// Demo for feign client and
	@GetMapping("/{id}/v2")
	@HystrixCommand(fallbackMethod = "getOrderWithProductFallback")
	public ResponseEntity<?> getOrderWithProduct2(@PathVariable long id) {
		Order order = orderService.getOneOrder(id);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("order", order);

		// use feign client to get product from product-service
		Product product = productServiceFeign.getProduct(order.getProduct_id());
		result.put("product", product);
		return new ResponseEntity<Map<String, Object>>(result, HttpStatus.OK);
	}

	public Map<String, Object> getOrderWithProductFallback(long id) {
        Order order = orderService.getOneOrder(id);
        Map<String, Object> result = new HashMap<>();
        result.put("order", order);
        result.put("product", "Product detail is not avaiable now...");
        return result;
    }

	@PostMapping("/")
	public ResponseEntity<Boolean> postOrders(@RequestBody Order order) {
		return orderService.addOneOrder(order);
	}

	@GetMapping("/report")
	public ResponseEntity<Boolean> getOrderReport() {
		// TODO: retrieve all orders from DB and send to reporting service to generate
		// report
		// and upload to AWS S3. once uploaded use WebSocket to send uploaded URL
		// through push notification.
		orderService.generateReportForAllOrders();
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

}
