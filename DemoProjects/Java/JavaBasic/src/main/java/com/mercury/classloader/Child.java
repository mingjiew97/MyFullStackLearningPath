package com.mercury.classloader;

public class Child extends Parent{

	static {
		System.out.println("Child class loaded.");
	}
	
	static void hello() {
		System.out.println("hello");
	}
	
}
