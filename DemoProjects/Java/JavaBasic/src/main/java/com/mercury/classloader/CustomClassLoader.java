package com.mercury.classloader;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/*
 * For this test, you need to create a HolderSingleton.java in your Training/JavaClasses folder
 * Please use below codes.
 * Attention: Please use another IDE to create the class. Do not put this class in current package.
 * Otherwise, the parent class loader(Application class loader) will load the class.

	public class HolderSingleton {
	
		private HolderSingleton() {
	
		}
	
		private static class Holder {
			static final HolderSingleton instance = new HolderSingleton();
		}
	
		public static HolderSingleton getInstance() {
			return Holder.instance;
		}
	
	}

 *
 */

public class CustomClassLoader extends ClassLoader{
	
	// win: C:\Training\JavaClasses
//	private final static Path DEFAULT_CLASS_DIR = Paths.get("C:\\Training\\JavaClasses");
	// mac: /Users/yshi/Documents/Training/JavaClasses
	private final static Path DEFAULT_CLASS_DIR = Paths.get(System.getProperty("user.home"), "Documents", "Training", "JavaClasses");
	private final Path classDir;
		
	public CustomClassLoader() {
		super();
		this.classDir = DEFAULT_CLASS_DIR;
	}
	
	public CustomClassLoader(Path classDir) {
		super();
		this.classDir = classDir;
	}
	
	public CustomClassLoader(Path classDir, ClassLoader parent) {
		super(parent);
		this.classDir = classDir;
	}

	@Override
	protected Class<?> findClass(String name) throws ClassNotFoundException {
		byte[] bytes = this.readClassFromFile(name);
		if(bytes == null || bytes.length == 0) {
			throw new ClassNotFoundException(name + " can't be loaded."); 
		}
		return this.defineClass(name, bytes, 0, bytes.length);
	}
	
	private byte[] readClassFromFile(String name) throws ClassNotFoundException {
		String classPath = name.replace(".", FileSystems.getDefault().getSeparator());
		Path filePath = classDir.resolve(Paths.get(classPath + ".class"));
		if (!filePath.toFile().exists()) {
			throw new ClassNotFoundException(name + " is not found in " + classDir);
		}
		try (
			ByteArrayOutputStream baos = new ByteArrayOutputStream();	
		) {
			Files.copy(filePath, baos);
			return baos.toByteArray();
		} catch (IOException e) {
			throw new ClassNotFoundException(name + " can't be loaded.");
		}
	}

	@Override
	public String toString() {
		return "MSI Custom Class Loader";
	}
	
	public static void main(String[] args) throws ClassNotFoundException {
		ClassLoader cl1 = new CustomClassLoader();
		Class<?> class1 = cl1.loadClass("HolderSingleton");
		Class<?> class2 = cl1.loadClass("HolderSingleton");
		System.out.println(class1 == class2); // same class object in heap if loaded by same class loader object
		ClassLoader cl2 = new CustomClassLoader();
		Class<?> class3 = cl2.loadClass("HolderSingleton");
		// different class objects in heap if loaded by different class loader object of same type
		System.out.println(class1 == class3);
		AnotherCustomClassLoader acl = new AnotherCustomClassLoader();
		Class<?> class4 = acl.loadClass("HolderSingleton");
		// different class objects in heap if loaded by different type of class loaders
		System.out.println(class1 == class4);
		try {
			Method getInstance1 = class1.getMethod("getInstance");
			getInstance1.setAccessible(true);
			Method getInstance3 = class1.getMethod("getInstance");
			getInstance3.setAccessible(true);
			// one copy of class in method area loaded by same type of class loader
			System.out.println(getInstance3.invoke(null) == getInstance1.invoke(null));
			Method getInstance4 = class4.getMethod("getInstance");
			getInstance4.setAccessible(true);
			// two copies of class in method area.
			// HolderSingleton is no longer a singleton if loaded by two class loaders in different types.
			System.out.println(getInstance4.invoke(null) == getInstance1.invoke(null));
		} catch (NoSuchMethodException | SecurityException | IllegalAccessException | IllegalArgumentException
				| InvocationTargetException e) {
			e.printStackTrace();
		}
	}
	
}
