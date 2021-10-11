package com.mercury.springjwtdemo.response;

public class JwtResponse extends Response {

	private String token;

	public JwtResponse(boolean success, String message, String token) {
		super(success, message);
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	@Override
	public String toString() {
		return "JwtResponse [token=" + token + ", isSuccess()=" + isSuccess() + ", getMessage()=" + getMessage() + "]";
	}

}
