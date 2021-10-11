package com.mercury.chatservice.bean;

public class ResponseMessage extends Message {

	private String time;

	public ResponseMessage() {
		super();
	}

	public ResponseMessage(String from, String text, String time) {
		super(from, text);
		this.time = time;
	}

	public ResponseMessage(Message message, String time) {
		super(message.getText(), message.getText());
		this.time = time;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

}
