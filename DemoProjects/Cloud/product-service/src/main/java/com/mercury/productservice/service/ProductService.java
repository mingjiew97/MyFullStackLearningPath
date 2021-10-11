package com.mercury.productservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.productservice.bean.Product;
import com.mercury.productservice.dao.ProductDao;

@Service
@Transactional
public class ProductService {

	@Autowired
	private ProductDao productDao;
	
	public List<Product> findAllProducts() {
		return productDao.findAll();
	}
	
	public Product getOneProduct(long product_id) {
		Optional<Product> op = productDao.findById(product_id);
		if (op.isPresent()) {
			return op.get();
		} else {
			return null;
		}
	}
	
}
