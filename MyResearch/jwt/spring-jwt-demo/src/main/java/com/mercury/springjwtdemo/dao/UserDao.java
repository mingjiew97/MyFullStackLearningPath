package com.mercury.springjwtdemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mercury.springjwtdemo.bean.User;

@Repository
public interface UserDao extends JpaRepository<User, Long>{
	
	public User findByUsername(String username);
	
	public boolean existsByUsername(String username);
	
	public boolean existsByEmail(String email);
	
}
