$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Scenario_outline.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is designed to validate multiple sets of data",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-sets-of-data",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-sets-of-data;scenario-description",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@custom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a precondition has value \u003cBrowser\u003e and \u003curl\u003e",
  "keyword": "Given "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-sets-of-data;scenario-description;",
  "rows": [
    {
      "cells": [
        "Browser",
        "url"
      ],
      "line": 8,
      "id": "this-feature-is-designed-to-validate-multiple-sets-of-data;scenario-description;;1"
    },
    {
      "cells": [
        "FF",
        "http://demo.nopcommerce.com/"
      ],
      "line": 9,
      "id": "this-feature-is-designed-to-validate-multiple-sets-of-data;scenario-description;;2"
    },
    {
      "cells": [
        "Chrome",
        "https://google.com"
      ],
      "line": 10,
      "id": "this-feature-is-designed-to-validate-multiple-sets-of-data;scenario-description;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-sets-of-data;scenario-description;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@custom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a precondition has value FF and http://demo.nopcommerce.com/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "TC_02_VerifyScenarioOutline.LaunchApplication(String,String)"
});
formatter.result({
  "duration": 263374415,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.testcases.TC_02_VerifyScenarioOutline.LaunchApplication(String,String) in file:/D:/subhash/Cucumber_class/bin/\u0027 with pattern [^a precondition has value FF and http://demo\\.nopcommerce\\.com/$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: Given a precondition has value FF and http://demo.nopcommerce.com/\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-sets-of-data;scenario-description;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@custom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a precondition has value Chrome and https://google.com",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});