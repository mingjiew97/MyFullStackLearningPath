package com.mercury.chatservice.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.mercury.chatservice.bean.Message;
import com.mercury.chatservice.bean.ResponseMessage;

@Controller
public class ChatController {

	@MessageMapping("/chat")
	@SendTo("/topic/messages")
	public ResponseMessage send(Message message) throws Exception {
		String time = new SimpleDateFormat("HH:mm").format(new Date());
		return new ResponseMessage(message, time);
	}
}
