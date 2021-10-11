package com.mercury.JdbcDemo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import com.mercury.JdbcDemo.util.JdbcUtil;

public class Test1 {

	public static void main(String[] args) {
		try(
			Connection conn = JdbcUtil.getConnection();
		){
			// transaction: a group of sql statements which
			// can be rolled back upon exception or committed upon success.
			conn.setAutoCommit(false);
			
			try {
				String sql = "insert into sample values('alice', 22)";
				Statement st = conn.createStatement();
				st.executeQuery(sql);
				
				sql = "insert into sample values('karen', 22)";
				st.execute(sql);
				
				conn.commit();
			}catch(Exception e) {
				conn.rollback();
			}
			
			String sql1 = "select * from sample";
			Statement st1 = conn.createStatement();
			ResultSet rs = st1.executeQuery(sql1);
			while(rs.next()) {
				System.out.println(rs.getString("name") + "\t" + rs.getInt("age"));
			}
			
		}catch(Exception e) {
			System.err.println(e);
		}
	}

}
