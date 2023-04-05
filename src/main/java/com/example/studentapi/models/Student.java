package com.example.studentapi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//Specifies to Springboot that we want Students to be stored in our database
@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String firstName;
	private String lastName;
	private boolean lovesClass;
	
	public Student(Long id, String firstName, String lastName, boolean lovesClass) {
		this.id=id;
		this.firstName=firstName;
		this.lastName=lastName;
		this.lovesClass=lovesClass;
	}
	
	public Student() {}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public boolean isLovesClass() {
		return lovesClass;
	}
	public void setLovesClass(boolean lovesClass) {
		this.lovesClass = lovesClass;
	}
	
	
	
	
	@Override
	public String toString() {
		return "Student [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", lovesClass="
				+ lovesClass + "]";
	}
	
	
	
	
	
	
}
