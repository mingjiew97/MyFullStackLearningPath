package com.mercury.java8;

public interface HelloDao {

	default void sayHello(){
		System.out.println("Hello from HelloDao");
	}
	
	static void greet(){
		System.out.println("Greet from HelloDao");
	}
	
}
