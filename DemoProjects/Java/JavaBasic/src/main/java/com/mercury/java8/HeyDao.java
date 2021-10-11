package com.mercury.java8;

public interface HeyDao {

	default void sayHello(){
		System.out.println("Hello from HeyDao");
	}
	
	static void greet(){
		System.out.println("Greet from HeyDao");
	}
	
}
