package com.in28minutes.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.bean.HelloWorldBean;

@RestController
@CrossOrigin
public class BasicAuthenthicationController {
	
	@GetMapping(value = "/basicauth")
	public AuthenthicationBean helloWorld()
	{
		return new AuthenthicationBean("you are Authenticated");
	}
	
	

}
