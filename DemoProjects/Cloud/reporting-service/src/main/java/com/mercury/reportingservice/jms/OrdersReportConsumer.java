package com.mercury.reportingservice.jms;

import java.util.List;

import javax.annotation.Resource;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import com.mercury.common.bean.Order;

@Component
public class OrdersReportConsumer {
	
	@Resource
	private List<List<Order>> ordersForReport;

	@SuppressWarnings("unchecked")
	@JmsListener(destination = "ordersReportQueue", containerFactory = "ordersReportContainer")
	public void receive(Message msg) throws JMSException {
		ObjectMessage objectMessage = (ObjectMessage) msg;
		ordersForReport.add((List<Order>) objectMessage.getObject());
	}

}
