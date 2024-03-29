package com.finzly.UtilityBill_PaymentPlatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.UtilityBill_PaymentPlatform.entity.Employee;
import com.finzly.UtilityBill_PaymentPlatform.service.EmployeeService;


@RestController
@RequestMapping("/employee")
@CrossOrigin()
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/add-employee")
	public String addEmployee(@RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}
	
	@PostMapping("/checkEmployeeId/{employeeId}")
	public String checkEmployeeID(@PathVariable long employeeId) {
		return employeeService.checkEmployeeID(employeeId);
	}
	
	
	

}
