package com.mercury.springjwtdemo.config;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mercury.springjwtdemo.response.Response;

public class SecurityUtils {

	private static final ObjectMapper mapper = new ObjectMapper();

	public static void sendResponse(HttpServletResponse httpServletResponse, String message,
			Exception exception) throws IOException {
		Response response = new Response(exception == null ? true : false, message);
		flushResponse(httpServletResponse, response);
	}

	public static void flushResponse(HttpServletResponse httpServletResponse, Response response) throws IOException {
		httpServletResponse.setContentType("application/json;charset=UTF-8");
		PrintWriter writer = httpServletResponse.getWriter();
		writer.write(mapper.writeValueAsString(response));
		writer.flush();
		writer.close();
	}

}
