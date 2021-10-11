package com.mercury.JdbcDemo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

import com.mercury.JdbcDemo.util.JdbcUtil;

public class Test2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Input name: ");
		String name = scanner.nextLine();
		
		try(Connection conn = JdbcUtil.getConnection()){
//			Statement st = conn.createStatement();
//			String sql = "select * from sample where name = '" + name + "'";
//			// select * from sample where name = 'x' or '1' = '1'
//			// SQL injection.
//			ResultSet rs = st.executeQuery(sql);
//			while(rs.next()) {
//				System.out.println(rs.getString("name") + "\t" + rs.getInt("age"));
//			}
			
			String sql1 = "select * from sample where name = ?";
			PreparedStatement ps = conn.prepareStatement(sql1);
			ps.setString(1, name);
			ResultSet rs1 = ps.executeQuery();
			while(rs1.next()) {
				System.out.println(rs1.getString("name") + "\t" + rs1.getInt("age"));
			}
			
		}catch(Exception e) {
			
		}
	}

}
