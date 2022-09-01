package com.in28minutes.rest.webservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.bean.HelloWorldBean;

@RestController
@CrossOrigin
public class HellowWorldController {
	
	@RequestMapping(value = "/helloworld", method = RequestMethod.GET)
	public String helloWorld()
	{
		return "Hello World";
	}
	
	@RequestMapping(value = "/helloworldbean", method = RequestMethod.GET)
	public HelloWorldBean helloWorldbean()
	{
		return new HelloWorldBean("Hello World-Bean");
	}
	
	@RequestMapping(value = "/helloworldbean/{name}", method = RequestMethod.GET)
	public HelloWorldBean helloWorldbeanPathVariable(@PathVariable("name") String name)
	{
		//throw new RuntimeException("Something Went Wrong");
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}

}
