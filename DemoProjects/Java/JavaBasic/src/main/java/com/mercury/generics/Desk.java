package com.mercury.generics;

public class Desk extends Furniture {

	private String shape;

	public Desk() {
		super();
	}

	public Desk(String shape) {
		super();
		this.shape = shape;
	}

	public Desk(String name, String shape) {
		super(name);
		this.shape = shape;
	}

	public String getShape() {
		return shape;
	}

	public void setShape(String shape) {
		this.shape = shape;
	}

}
