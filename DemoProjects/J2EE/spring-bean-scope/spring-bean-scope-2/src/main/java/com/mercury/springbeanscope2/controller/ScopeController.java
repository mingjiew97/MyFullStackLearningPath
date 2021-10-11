package com.mercury.springbeanscope2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.springbeanscopecore.bean.Application;
import com.mercury.springbeanscopecore.bean.MyEnum;
import com.mercury.springbeanscopecore.bean.MySingleton;
import com.mercury.springbeanscopecore.bean.Single;
import com.mercury.springbeanscopetomcat.bean.TomcatEnum;

@RestController
public class ScopeController {

	@Autowired
	Single single;

	@Autowired
	Application application;

	@GetMapping("/single")
	public int single() {
		return single.hashCode();
	}

	@GetMapping("/application")
	public int application() {
		return application.hashCode();
	}

	@GetMapping("/ms")
	public int mySingleton() {
		return MySingleton.getInstance().hashCode();
	}

	@GetMapping("/enum")
	public int myEnum() {
		return MyEnum.INSTANCE.hashCode();
	}
	
	@GetMapping("/tenum")
	public int tomcatEnum() {
		return TomcatEnum.INSTANCE.hashCode();
	}

}
