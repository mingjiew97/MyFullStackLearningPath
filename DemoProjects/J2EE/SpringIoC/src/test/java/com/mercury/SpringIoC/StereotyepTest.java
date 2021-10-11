package com.mercury.SpringIoC;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.mercury.stereotype.JavaConfig;
import com.mercury.stereotype.beans.Address;
import com.mercury.stereotype.beans.Book;
import com.mercury.stereotype.beans.LazyBean;
import com.mercury.stereotype.beans.Person;


public class StereotyepTest {

	public static void main(String[] args) {
//		ApplicationContext actx = new ClassPathXmlApplicationContext("stereoconfig.xml");
//		Person person = (Person)actx.getBean("person");
//		System.out.println(person);
//		
//		System.out.println(LazyBean.getCount());
//		actx.getBean("lazyBean");
//		System.out.println(LazyBean.getCount());
		
		ApplicationContext actx = new AnnotationConfigApplicationContext(JavaConfig.class);
		Person person = (Person)actx.getBean("person");
		System.out.println(person);
		
		// lazy bean
		System.out.println(LazyBean.getCount());
		actx.getBean("lazyBean");
		System.out.println(LazyBean.getCount());
		
		// singleton
		Person person1 = (Person)actx.getBean("person");
		System.out.println(person == person1);
		
		// prototype
		Address address1 = (Address)actx.getBean("address");
		Address address2 = (Address)actx.getBean("address");
		System.out.println(address1 == address2);
		
		// @Primary, @Qualifier
		Book book = actx.getBean(Book.class);
		System.out.println(book);
	}

}
