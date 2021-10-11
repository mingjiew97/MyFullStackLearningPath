//package com.mercury.SpringBootRESTDemo.pgbean;
//
//import java.time.LocalDateTime;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "msi_bid")
//public class Bid {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(columnDefinition = "serial")
//	private long id;
//	@Column
//	private long product_id;
//	@Column
//	private LocalDateTime start_time;
//	@Column
//	private LocalDateTime end_time;
//	@Column
//	private double start_price;
//	@Column
//	private double win_price;
//
//	public Bid() {
//		super();
//	}
//
//	public Bid(long product_id, LocalDateTime start_time, LocalDateTime end_time, double start_price,
//			double win_price) {
//		super();
//		this.product_id = product_id;
//		this.start_time = start_time;
//		this.end_time = end_time;
//		this.start_price = start_price;
//		this.win_price = win_price;
//	}
//
//	public long getId() {
//		return id;
//	}
//
//	public void setId(long id) {
//		this.id = id;
//	}
//
//	public long getProduct_id() {
//		return product_id;
//	}
//
//	public void setProduct_id(long product_id) {
//		this.product_id = product_id;
//	}
//
//	public LocalDateTime getStart_time() {
//		return start_time;
//	}
//
//	public void setStart_time(LocalDateTime start_time) {
//		this.start_time = start_time;
//	}
//
//	public LocalDateTime getEnd_time() {
//		return end_time;
//	}
//
//	public void setEnd_time(LocalDateTime end_time) {
//		this.end_time = end_time;
//	}
//
//	public double getStart_price() {
//		return start_price;
//	}
//
//	public void setStart_price(double start_price) {
//		this.start_price = start_price;
//	}
//
//	public double getWin_price() {
//		return win_price;
//	}
//
//	public void setWin_price(double win_price) {
//		this.win_price = win_price;
//	}
//
//}
