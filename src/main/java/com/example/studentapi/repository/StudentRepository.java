package com.example.studentapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.studentapi.models.Student;

//Responsible for specifying a series of interactions that we can employ on our database using commands
//

@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {

	Optional<Student> getStudentById(Long id);
	
	@Override
	List<Student> findAll();
	
}
