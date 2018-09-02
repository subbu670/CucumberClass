Feature: Need to verify the following functionalities.
Dev team should develop the registration feature in three sections.
QA team must validate three sections Headers and their respective fields.
Development team should write a business logic to register multiple users with different sets of data.
QA team must validate each and every input field.

Scenario: This scenario is designed to validate section headers
    Given As a user i want to launch "FF" browser and give url and maximize it 
    |http://demo.nopcommerce.com/|
    When the browser is launched click on register link
    Then verify the register page launched successfully
    
    
 