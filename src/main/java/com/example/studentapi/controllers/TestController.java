package com.example.studentapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentapi.models.Student;

@RestController
@RequestMapping("/test")
public class TestController {

	@GetMapping
	public String testEndpoint() {
		
		Student myStudent = new Student();
		
		System.out.println(myStudent);
		
		return "Hello, World";
	}
}
