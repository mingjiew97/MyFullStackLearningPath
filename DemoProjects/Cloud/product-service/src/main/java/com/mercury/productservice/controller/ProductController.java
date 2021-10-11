package com.mercury.productservice.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.productservice.bean.Product;
import com.mercury.productservice.service.ProductService;

@RestController
@RefreshScope
public class ProductController {
	
	@Value("${discount: 1}")
    private double discount;

	@Autowired
	private ProductService productService;

	@GetMapping("/")
	public List<Product> getProducts() {
		return productService.findAllProducts().stream()
				.map(p -> {
					p.setPrice((int)(p.getPrice() * discount));
					return p;
				}).collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public Product getProductsById(@PathVariable("id") long id) {
		return productService.getOneProduct(id);
	}

}
