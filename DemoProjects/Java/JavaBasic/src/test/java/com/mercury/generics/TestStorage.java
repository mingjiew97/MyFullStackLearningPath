package com.mercury.generics;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TestStorage {
	
	Desk desk;
	Chair chair;
	
	@Before
	public void setup() {
		desk = new Desk();
		chair = new Chair();
	}
	

	@Test
	public void testAddDest() {
		Storage<Desk> storage = new Storage<>();
		storage.putInStorage(desk);
		Assert.assertEquals(storage.getFromStorage(), desk);
	}
	
	@Test
	public void testAddFurniture() {
		Storage<Furniture> storage = new Storage<>();
		storage.putInStorage(desk);
		Assert.assertEquals(storage.getFromStorage(), desk);
		storage.putInStorage(chair);
		Assert.assertEquals(storage.getFromStorage(), chair);
	}

}
