package com.mercury.productservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.productservice.bean.Product;

public interface ProductDao extends JpaRepository<Product, Long> {

}
