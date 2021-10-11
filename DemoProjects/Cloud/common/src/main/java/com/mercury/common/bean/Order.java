package com.mercury.common.bean;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

public class Order implements Serializable{

	private long id;
	@JsonDeserialize(using = LocalDateTimeDeserializer.class)
	@JsonSerialize(using = LocalDateTimeSerializer.class)
	private LocalDateTime time;
	private int quantity;
	private long product_id;
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
