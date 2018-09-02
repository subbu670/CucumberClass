package com.ScreenFunctions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Registrations {
@FindBy(how = How.XPATH,using = "//*[@href='/register']")	
public static WebElement Lnk_Register;
	public static void ClickRegisterLink() {
		boolean status = true;
		try
		{
			Lnk_Register.click();
		}
		catch (Exception e) {
			
		}
	}
	

}
