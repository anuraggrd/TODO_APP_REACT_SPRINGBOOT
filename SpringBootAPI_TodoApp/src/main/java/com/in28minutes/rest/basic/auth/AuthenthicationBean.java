package com.in28minutes.rest.basic.auth;

public class AuthenthicationBean {

	private String message;

	public AuthenthicationBean(String message) {
		
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
