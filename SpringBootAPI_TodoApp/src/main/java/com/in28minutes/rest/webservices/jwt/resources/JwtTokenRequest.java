package com.in28minutes.rest.webservices.jwt.resources;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

	/*
	 * { "token":
	 * "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY1OTk4OTgyMCwiaWF0IjoxNjU5Mzg1MDIwfQ.Gtt5wjtB7OKZiMKzyFaSkUwQ2UcIT3qvZL4LekxtJ5aYNkrfIYJYY6HUf3pxm179MpTXdBNwvnniY-8D_O8kTQ"
	 * }
	 */
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

