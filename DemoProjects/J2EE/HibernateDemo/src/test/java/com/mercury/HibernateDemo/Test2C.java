package com.mercury.HibernateDemo;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test2C {

	public static void main(String[] args) {
		Session session = HibernateUtil.currentSession();
		Criteria ct = session.createCriteria(User.class);
		User user = (User)ct.add(Restrictions.eq("name", "HBob"))
				.add(Restrictions.gt("age", 10))
				.uniqueResult();
		System.out.println(user);
		HibernateUtil.closeSession();
	}

}
