package com.mercury.core.bean;

import java.io.Serializable;

public class OrderProduct implements Serializable{

	private static final long serialVersionUID = 1L;
	private int id;
	private int qty;
	private Order order;
	private Product product;

	public OrderProduct() {
		super();
	}

	public OrderProduct(int qty, Order order, Product product) {
		super();
		this.qty = qty;
		this.order = order;
		this.product = product;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "OrderProduct [id=" + id + ", qty=" + qty + ", product=" + product + "]";
	}

	@Override
	public boolean equals(Object obj) {
		OrderProduct op =  (OrderProduct)obj;
		return op.getProduct().getId() == product.getId() && op.getOrder().getId() == order.getId();
	}
	
}
