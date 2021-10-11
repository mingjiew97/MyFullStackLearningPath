package com.mercury.thread;

import java.util.ArrayList;
import java.util.List;

class OThread extends Thread{
	
	private Bar bar;
	
	public OThread(Bar bar) {
		this.bar = bar;
	}

	@Override
	public void run() {
		bar.x.add(1);
		System.out.println(Thread.currentThread().getName() + " x: " + bar.x);
		bar.y.get().add(1);
		System.out.println(Thread.currentThread().getName() + " y: " + bar.y.get());
	}
	
}

class Bar {
	List<Integer> x = new ArrayList<>();
	
	public ThreadLocal<List<Integer>> y = new ThreadLocal<List<Integer>>() {
		@Override
		protected List<Integer> initialValue() {
			return new ArrayList<>();
		}
	};
}

public class ThreadLocalObject {
	public static void main(String[] args) {
		Bar b = new Bar();
		new OThread(b).start();
		new OThread(b).start();
	}
}
