package com.mercury.classloader;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class AnotherCustomClassLoader extends ClassLoader{
	
	// win: C:\Training\JavaClasses
//	private final static Path DEFAULT_CLASS_DIR = Paths.get("C:\\Training\\JavaClasses");
	// mac: /Users/yshi/Documents/Training/JavaClasses
	private final static Path DEFAULT_CLASS_DIR = Paths.get(System.getProperty("user.home"), "Documents", "Training", "JavaClasses");
	private final Path classDir;
		
	public AnotherCustomClassLoader() {
		super();
		this.classDir = DEFAULT_CLASS_DIR;
	}
	
	public AnotherCustomClassLoader(Path classDir) {
		super();
		this.classDir = classDir;
	}
	
	public AnotherCustomClassLoader(Path classDir, ClassLoader parent) {
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
		return "MSI Another Custom Class Loader";
	}
	
}
