package com.mercury.stereotype.beans;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository
@Scope("prototype")
public class Address {
	@Value("Princeton")
	private String city;
	@Value("NJ")
	private String state;

	@Override
	public String toString() {
		return "Address [city=" + city + ", state=" + state + "]";
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

}
