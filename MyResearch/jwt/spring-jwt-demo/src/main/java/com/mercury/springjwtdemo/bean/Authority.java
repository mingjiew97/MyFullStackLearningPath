package com.mercury.springjwtdemo.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "msi_authority")
public class Authority implements GrantedAuthority{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	@Enumerated(EnumType.STRING)
	private AuthorityType type;

	public Authority() {
		super();
	}

	public Authority(Long id) {
		super();
		this.id = id;
	}
	
	public Authority(Long id, AuthorityType type) {
		super();
		this.id = id;
		this.type = type;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public AuthorityType getType() {
		return type;
	}

	public void setType(AuthorityType type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Authority [id=" + id + ", type=" + type + "]";
	}

	@Override
	@JsonIgnore
	public String getAuthority() {
		return type.name();
	}

}
