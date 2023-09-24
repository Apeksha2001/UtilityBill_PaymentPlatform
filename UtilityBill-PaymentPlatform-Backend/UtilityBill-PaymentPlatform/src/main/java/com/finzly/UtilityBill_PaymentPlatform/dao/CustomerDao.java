package com.finzly.UtilityBill_PaymentPlatform.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.UtilityBill_PaymentPlatform.entity.CustomerData;


@Repository
public class CustomerDao {
	@Autowired
	private SessionFactory customerSessionFactory;

	public List<CustomerData> getAllCusomerData() {
		Session session = customerSessionFactory.openSession();
		Criteria criteria = session.createCriteria(CustomerData.class);
		return criteria.list();
	}

}
