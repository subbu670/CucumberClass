package com.testcases;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import com.GenericFunctions.GenericFunctions;
import com.ScreenFunctions.Registrations;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class TC_01_VerifySectionHeaders_R1 extends GenericFunctions {
	
	
	@Given("^As a user i want to launch \"([^\"]*)\" browser and give url and maximize it$")
	
	public static void LaunchApplication(String Browser, DataTable testdata){
		
		List<List<String>> data = testdata.raw();
		String url = data.get(0).get(0);
		
		boolean status = LaunchBrowser(Browser, url);
		if (status) {
			
			
			System.out.println("Browser launched successfully");
			
		}
		else
		{
			System.out.println("Browser is not launched successfully");
		}
		
	}
	
	@When ("^the browser is launched click on register link$")
	public static void ClickRegistration(){
		Registrations Reg = PageFactory.initElements(driver, Registrations.class);
		Reg.ClickRegisterLink();
	}
	

}
