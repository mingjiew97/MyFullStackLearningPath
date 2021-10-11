package com.alexgao.restapi.aws;

public class UserResponse {

	private boolean status;
	private String name;
	private String message;

	public UserResponse() {
		super();
	}

	public UserResponse(boolean status, String name, String message) {
		super();
		this.status = status;
		this.name = name;
		this.message = message;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
