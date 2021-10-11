package com.mercury.orderservice.bean;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "msi_order")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private LocalDateTime time;
	@Column
	private int quantity;
	@Column
	private long product_id;
	@Column
	private long user_id;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(long id, LocalDateTime time, int quantity, long product_id, long user_id) {
		super();
		this.id = id;
		this.time = time;
		this.quantity = quantity;
		this.product_id = product_id;
		this.user_id = user_id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDateTime getTime() {
		return time;
	}

	public void setTime(LocalDateTime time) {
		this.time = time;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(long product_id) {
		this.product_id = product_id;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", time=" + time + ", quantity=" + quantity + ", product_id=" + product_id
				+ ", user_id=" + user_id + "]";
	}

}
