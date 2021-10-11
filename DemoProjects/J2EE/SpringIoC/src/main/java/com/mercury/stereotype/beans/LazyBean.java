package com.mercury.stereotype.beans;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
@Lazy
public class LazyBean {
	private static int count;
	
	public LazyBean(){
		count++;
	}
	
	public static int getCount(){
		return count;
	}
}
