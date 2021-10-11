package com.mercury.JdbcDemo;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Types;

import com.mercury.JdbcDemo.util.JdbcUtil;

import oracle.jdbc.internal.OracleTypes;

public class Test3 {

	public static void main(String[] args) {
		try(Connection conn = JdbcUtil.getConnection()){
			String sql = "{? = call saveuser(?, ?)}";
			CallableStatement cs = conn.prepareCall(sql);
			cs.registerOutParameter(1, Types.INTEGER);
			cs.setString(2, "bob");
			cs.setInt(3, 11);
			cs.execute();
			System.out.println(cs.getInt(1));
			
			sql = "{?=call queryuser()}";
			cs = conn.prepareCall(sql);
			cs.registerOutParameter(1, OracleTypes.CURSOR);
			cs.execute();
			ResultSet rs = (ResultSet)cs.getObject(1);
			while(rs.next()) {
				System.out.println(rs.getString("name") + "\t" + rs.getInt("age"));
			}
		}catch(Exception e) {
			System.err.println(e);
		}
	}

}
