package com.mercury.classloader;

public class ClassLoaderTest {

	
	public static void main(String[] args) {
		System.out.println(String.class.getClassLoader());
		System.out.println(System.getProperty("sun.boot.class.path"));
		System.out.println(System.getProperty("java.ext.dirs"));
		System.out.println(System.getProperty("java.class.path"));
	}
}
