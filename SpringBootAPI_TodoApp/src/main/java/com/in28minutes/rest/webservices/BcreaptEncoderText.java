package com.in28minutes.rest.webservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcreaptEncoderText {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i=0;i<5;i++) {
		String encode = encoder.encode("123");
		System.out.println(encode);
		}

	}

}
