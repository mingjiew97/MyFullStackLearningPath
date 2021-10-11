package com.mercury.classloader;

public class SingletonForClassLoader {
	
	private static SingletonForClassLoader instance = new SingletonForClassLoader();
	private static int x = 0;
	private static int y;
	
	private SingletonForClassLoader() {
		x++;
		y++;
	}
	
	public static SingletonForClassLoader getInstance() {
		return instance;
	}
	
	public static void main(String[] args) {
		SingletonForClassLoader s = SingletonForClassLoader.getInstance();
		System.out.println(s.x);
		System.out.println(s.y);
	}

}
