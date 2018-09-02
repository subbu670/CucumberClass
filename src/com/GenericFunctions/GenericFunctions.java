package com.GenericFunctions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class GenericFunctions {

	public static WebDriver driver;
	
	
	public static boolean LaunchBrowser(String Browser, String url) {
		boolean status = true;
		try {
		switch (Browser) {
		
		case "FF": {
		driver = new FirefoxDriver();
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		break;
		}
			
		case "Chrome": {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");	
		driver = new ChromeDriver();	
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}
		break;
		
		default:
		throw new Exception ("Browser not available");
			
		
		}
		
		
			
		}
		catch (Exception e)
		{
			status = false;
			System.out.println(e.getMessage());
			
		}
		return status;
	}
	
}
