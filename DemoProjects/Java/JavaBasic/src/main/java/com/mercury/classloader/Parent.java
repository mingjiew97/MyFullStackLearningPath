package com.mercury.classloader;

public class Parent {

	static {
		System.out.println("Parent class loaded.");
	}
	
	static int x = 1;
	
	static final int y = 2;
}
