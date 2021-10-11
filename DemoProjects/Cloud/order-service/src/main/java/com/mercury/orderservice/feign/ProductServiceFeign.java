package com.mercury.orderservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.mercury.common.bean.Product;

@FeignClient(name="product-service")
//@RibbonClient(name="reporting-service")
public interface ProductServiceFeign {

	@GetMapping("/{id}")
	Product getProduct(@PathVariable("id") long id);
	
}
