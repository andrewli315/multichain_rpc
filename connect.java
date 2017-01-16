import java.net.*;
import java.util.*;
import java.io.*;

class connect{
	public static void main(String[] args){
		String host = "localhost";
		int port = 5000;	
		try{
			System.out.println("connect to host on port "+port);
			Socket client  = new Socket(host,port);
			BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
			PrintWriter out = new PrintWriter(client.getOutputStream(), true);
			String from_user = "94d57192ea847f29e6414faf933acbd3360198a3c4d45fd2600291187f6c26f2";
			String from_server;
			out.println(from_user);
			System.out.println("JSON:");
			while((from_server = in.readLine()) != null){
				System.out.println(from_server);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}