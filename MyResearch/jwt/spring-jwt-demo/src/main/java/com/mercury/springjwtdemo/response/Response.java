package com.mercury.springjwtdemo.response;

public class Response {

	private boolean success;
	private String message;

	public Response() {
		super();
	}

	public Response(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Response [success=" + success + ", message=" + message + "]";
	}

}
