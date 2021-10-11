package com.mercury.core.bean;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class Order implements Serializable{

	private static final long serialVersionUID = 1L;
	private int id;
	private Date purchase_date;
	private List<OrderProduct> purchases;
	User user;

	public Order() {
		super();
	}

	public Order(Date purchase_date, List<OrderProduct> purchases) {
		super();
		this.purchase_date = purchase_date;
		this.purchases = purchases;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getPurchase_date() {
		return purchase_date;
	}

	public void setPurchase_date(Date purchase_date) {
		this.purchase_date = purchase_date;
	}

	public List<OrderProduct> getPurchases() {
		return purchases;
	}

	public void setPurchases(List<OrderProduct> purchases) {
		this.purchases = purchases;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", purchase_date=" + purchase_date + ", purchases=" + purchases + "]";
	}

}
