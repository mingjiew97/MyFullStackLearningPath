package com.mercury.thread;

class PThread extends Thread{
	
	private Foo foo;
	
	public PThread(Foo foo) {
		this.foo = foo;
	}

	@Override
	public void run() {
		foo.x++;
		System.out.println(Thread.currentThread().getName() + " x: " + foo.x);
		foo.y.set(foo.y.get() + 1);
		System.out.println(Thread.currentThread().getName() + " y: " + foo.y.get());
	}
	
}

class Foo {
	int x;
	
	public ThreadLocal<Integer> y = new ThreadLocal<Integer>() {
		@Override
		protected Integer initialValue() {
			return 0;
		}
	};
}

public class ThreadLocalPrimitive {
	
	public static void main(String[] args) {
		Foo f = new Foo();
		new PThread(f).start();
		new PThread(f).start();
	}
	
}
