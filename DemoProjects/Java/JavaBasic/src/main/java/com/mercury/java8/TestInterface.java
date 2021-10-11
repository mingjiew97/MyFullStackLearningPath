package com.mercury.java8;

@FunctionalInterface
public interface TestInterface {
	
	public abstract void test();
//	public abstract void test1();
	
	default void test2() {
		System.out.println("test2");
	}
	
	static void test3() {
		System.out.println("test3");
	}
}
