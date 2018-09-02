package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (features = "Features", 
					glue = {"com.testcases"},
					monochrome = true,
					plugin={"html:Summary.html", "json:Summary.json"},
					tags={"@custom"}
	)
			


public class Runner {
	

}
