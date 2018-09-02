package com.testcases;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import com.GenericFunctions.GenericFunctions;
import com.ScreenFunctions.Registrations;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

public class TC_02_VerifyScenarioOutline extends GenericFunctions {


	@Given("^a precondition has value (.*) and (.*)$")
	
public static void LaunchApplication(String Browser, String url){
		
		//List<List<String>> data = testdata.raw();
		//String url = data.get(0).get(0);
		
		//Registrations Reg = PageFactory.initElements(driver, Registrations.class);
	
		boolean status = LaunchBrowser(Browser, url);
		if (status) {
			
			
			System.out.println("Browser launched successfully");
			
		}
		else
		{
			System.out.println("Browser is not launched successfully");
		}
	}
}	
