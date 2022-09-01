package com.in28minutes.rest.webservices.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.rest.webservices.bean.Todo;
import com.in28minutes.rest.webservices.service.TodoServie;

@RestController
@CrossOrigin
public class TodoController {

	@Autowired
	private TodoServie todoservice;	
	
	@GetMapping(value = "/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable("username") String username)
	{
		return todoservice.getAllTodos(username);
		
	}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable("username") String username,@PathVariable("id") long id)
	{
		 Todo todo = todoservice.deleteById(id);
		 
		 if(todo!= null) {
			 return ResponseEntity.noContent().build();
		 }

		return ResponseEntity.notFound().build();
		
	}
	
	@GetMapping(value = "/users/{username}/todo/{id}")
	public Todo getTodo(@PathVariable("username") String username,@PathVariable("id") long id)
	{
		
		return todoservice.findById(id);
		
	}
	
	@PutMapping("/users/{username}/todo/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("username") String username,@PathVariable("id") long id,@RequestBody Todo todo)
	{
		Todo savedTodo = todoservice.Save(todo);
		
		
		return new ResponseEntity<Todo>(savedTodo,HttpStatus.OK) ;
	}
	
	@PostMapping("/users/{username}/todo/")
	public ResponseEntity<Todo> saveTodo(@PathVariable("username") String username,@RequestBody Todo todo)
	{
		Todo createdTodo = todoservice.Save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build() ;
	}
}
