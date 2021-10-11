package com.mercury.java8;

public class Greeting implements HelloDao, HeyDao {

	@Override
	public void sayHello() {
		HelloDao.super.sayHello();
	}
	
}
