package com.mercury.orderservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.orderservice.bean.Order;

public interface OrderDao extends JpaRepository<Order, Long> {

}
