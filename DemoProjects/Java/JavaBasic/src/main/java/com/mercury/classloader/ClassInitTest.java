package com.mercury.classloader;

public class ClassInitTest {

	public static void main(String[] args) {
		// Java classes are lazy initialized.
		
		// Parent will be initialized.
//		System.out.println(Parent.x);
//		System.out.println(Child.x);
//		try {
//			Class.forName("com.mercury.classloader.Parent");
//		} catch (ClassNotFoundException e) {
//			e.printStackTrace();
//		}
		
		// Child will be initialized.
//		Child.hello();
		
		// passive. no init
//		Parent[] parents = new Parent[10];
//		System.out.println(Parent.y);
		
	}
	
}
