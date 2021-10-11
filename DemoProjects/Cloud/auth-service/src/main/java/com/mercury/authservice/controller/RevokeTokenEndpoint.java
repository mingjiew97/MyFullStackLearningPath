package com.mercury.authservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.provider.endpoint.FrameworkEndpoint;
import org.springframework.security.oauth2.provider.token.ConsumerTokenServices;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@FrameworkEndpoint
public class RevokeTokenEndpoint {

	@Autowired
	ConsumerTokenServices tokenServices;

	@RequestMapping(method = RequestMethod.DELETE, value = "/oauth/token")
	@ResponseBody
	public ResponseEntity<Boolean> revokeToken(String access_token) {
		if (tokenServices.revokeToken(access_token)) {
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false, HttpStatus.FORBIDDEN);
		}
	}

}
