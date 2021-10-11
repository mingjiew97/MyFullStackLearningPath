package com.mercury.io;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

public class TestNIOR {

	public static void main(String[] args) {
		try(RandomAccessFile file = new RandomAccessFile("resource/test-noi.dat", "rw")) {
			FileChannel channel = file.getChannel();
			ByteBuffer buffer = ByteBuffer.allocate(48);
			int read = channel.read(buffer);
			while(read != -1) {
				read = channel.read(buffer);
			}
			buffer.flip();
			while(buffer.hasRemaining()) {
				System.out.println(buffer.get());
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}

}
