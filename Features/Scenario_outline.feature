Feature: This feature is designed to validate multiple sets of data

@custom
Scenario Outline: scenario description
	Given a precondition has value <Browser> and <url>
 			
		Examples:
		|Browser |url | 
		|FF |http://demo.nopcommerce.com/ |
		|Chrome |https://google.com |
		