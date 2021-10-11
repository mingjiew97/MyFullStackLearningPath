package com.mercury.io;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

public class TestNIO {

	public static void main(String[] args) {
		byte[] array = {-1, 2, 3, 4};
		try(RandomAccessFile file = new RandomAccessFile("resource/test-noi.dat", "rw")) {
			FileChannel channel = file.getChannel();
			ByteBuffer buffer = ByteBuffer.allocate(48);
			buffer.put(array);
			buffer.flip();
			while(buffer.hasRemaining()) {
				channel.write(buffer);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}

}
