package com.mercury.core.bean;

import java.io.Serializable;

public class UserProfile implements Serializable{

	private static final long serialVersionUID = 1L;
	private int id;
	private String type;

	public UserProfile() {
		super();
	}

	public UserProfile(int id) {
		super();
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "UserProfile [id=" + id + ", type=" + type + "]";
	}

}
