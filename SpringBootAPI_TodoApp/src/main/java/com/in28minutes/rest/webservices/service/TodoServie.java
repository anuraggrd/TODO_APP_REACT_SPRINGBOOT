package com.in28minutes.rest.webservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.rest.webservices.bean.Todo;

@Service
public class TodoServie {
	
	private static List<Todo> todos= new ArrayList<>();
	private static long id=0;
	static {
		todos.add(new Todo(++id,"Anurag","Learn to Dance",new Date(),false));
		todos.add(new Todo(++id,"Anurag","Learn to sing",new Date(),false));
		todos.add(new Todo(++id,"Anurag","Learn to swim",new Date(),false));
		todos.add(new Todo(++id,"Anurag","Learn about React",new Date(),false));
		todos.add(new Todo(++id,"Anurag","Learn about Azure",new Date(),false));
	}
	
	public List<Todo> getAllTodos(String username)
	{
		return todos;
		
	}
	
	public Todo deleteById(long id)
	{
		Todo todo = findById(id);
		if(todo == null) return null;
		
		if(todos.remove(todo))
		{
			return todo;
		}
		return null;
	}
	public Todo findById(long id)
	{
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo Save(Todo todo)
	{
		if(todo.getId() == -1 || todo.getId() == 0 )
		{
			todo.setId(++id);
			todos.add(todo);
		}else
		{
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

}
