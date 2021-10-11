package com.mercury.java8;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.mercury.code.Employee;
import com.mercury.code.Person;

public class TestStream {
	
	public int getBestAverageScore(String[][] array) {
		if(array == null || array.length == 0) {
			return -1;
		}
		double result = Arrays.stream(array)
					.map(arr -> {
						if(arr == null || arr.length <= 1) {
							return -1d;
						}
						return Arrays.stream(arr).skip(1).mapToDouble(Integer::parseInt).average().getAsDouble();
					}).max((a,b) -> (int)(a - b)).get();
		return (int)result;
	}

	public static void main(String[] args) {
		String[][] array = {{"bob", "23", "45", "98"}, {"ben", "90"}, {"ketty", "78"}};
		System.out.println(new TestStream().getBestAverageScore(array));
		
		int[] arr = {1, 2, 3, 5, 2, 1};
		System.out.println(Arrays.stream(arr).filter(num -> num > 1).sum());
		
		List<Person> persons = Arrays.asList(
			new Person("Bob"),
			new Person("Alex"),
			new Person("Alice")
		);
		Employee emp = persons.stream()
							.filter(p -> p.getName().startsWith("A"))
							.map(Person::getName) // method references.stream of names
							.map(Employee::new) // stream of employees
							.findAny()
							.get();
		System.out.println(emp);
		
		List<Long> list = new ArrayList<>();
		for (long i = 0; i < 1000; i++) {
			list.add(i);
		}
		
		long startTime = System.currentTimeMillis();
		System.out.println(
			list.stream().reduce(0l, (a, b) -> {
				try {
					Thread.sleep(5);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return a + b;
			})
		);
		long endTime = System.currentTimeMillis();
		System.out.println((endTime-startTime) + "ms");
		
		startTime = System.currentTimeMillis();
		System.out.println(
			// forkAndJoin: 4core * 1= 4threads
			list.parallelStream().reduce(0l, (a, b) -> {
				try {
					Thread.sleep(5);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return a + b;
			})
		);
		endTime = System.currentTimeMillis();
		System.out.println((endTime-startTime) + "ms");
	}

}
