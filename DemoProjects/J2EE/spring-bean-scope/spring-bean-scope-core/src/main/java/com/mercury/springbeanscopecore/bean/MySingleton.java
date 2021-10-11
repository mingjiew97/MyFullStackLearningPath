package com.mercury.springbeanscopecore.bean;

public class MySingleton {

	private static MySingleton ms;

	private MySingleton() {
	}

	public static MySingleton getInstance() {
		if (ms == null) {
			synchronized (MySingleton.class) {
				if (ms == null) {
					ms = new MySingleton();
				}
			}
		}
		return ms;
	}

}
