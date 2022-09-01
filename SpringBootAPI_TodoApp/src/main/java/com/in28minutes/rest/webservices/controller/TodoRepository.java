package com.in28minutes.rest.webservices.controller;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.in28minutes.rest.webservices.bean.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
	
	List<Todo>findByUsername(String username);

}
