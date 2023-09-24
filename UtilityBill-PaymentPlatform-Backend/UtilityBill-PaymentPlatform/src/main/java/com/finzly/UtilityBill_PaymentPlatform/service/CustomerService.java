package com.finzly.UtilityBill_PaymentPlatform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.UtilityBill_PaymentPlatform.dao.CustomerDao;
import com.finzly.UtilityBill_PaymentPlatform.entity.CustomerData;


@Service
public class CustomerService {
	
	@Autowired
	private CustomerDao customerDao;

	public List<CustomerData> getAllCusomerData() {
		return customerDao.getAllCusomerData();
	}

}
