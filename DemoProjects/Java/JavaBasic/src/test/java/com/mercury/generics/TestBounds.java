package com.mercury.generics;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class TestBounds {

	/*
	 * Unbounded wildcards <?>
	 */
	@Test
	public void testUnboundedWildcards() {
		List<Desk> list = new ArrayList<>();
		list.add(new Desk());
		// List<Furniture> flist = list;  // DOES NOT COMPILE
		List<?> flist = list;
		// flist.add(new Desk()); // DOES NOT COMPILE
		flist.add(null); // logically immutable(unbounded and upper-bounded). can't add/put anything except null
		System.out.println(flist.size());
	}
	
	private void printFurniture(List<? extends Furniture> list) {
		System.out.println(list);
	}
	
	/*
	 * Upper-Bounded Wildcards <? extends T>
	 */
	@Test
	public void testUpperBoundedWildcards() {
		List<Desk> list= new ArrayList<Desk>();
		printFurniture(list);
		List<Furniture> flist= new ArrayList<Furniture>();
		printFurniture(flist);
	}
	
	class FancyChiar extends Chair{
		
	}
	
	/*
	 * Lower-Bounded Wildcards <? super T>
	 */
	@Test
	public void testLowerBoundedWildcards() {
		List<? super Furniture> list= new ArrayList<>();
		list.add(new Desk());
		list.add(new Chair());
		list.add(new FancyChiar()); // tricky
	}

}
