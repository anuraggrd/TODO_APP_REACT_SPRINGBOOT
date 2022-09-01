package com.in28minutes.rest.webservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoAppApplication {

	public static void main(String[] args) {
		
		System.out.println("Hello world");
		SpringApplication.run(TodoAppApplication.class, args);
		
	}

}
