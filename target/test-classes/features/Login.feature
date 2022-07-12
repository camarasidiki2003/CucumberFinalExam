#Author: scamaratech@gmail.com

@Background
Feature: Cucumber Final Project

   @Background1
  Scenario: Sky Blue Background
    Given "Set SkyBlue Background" button exists
    When I click on the button
    Then the background color will change to sky blue         
  @Background2
  Scenario: White Background Change
    Given "Set SkyWhite Background" button exists
    When I click on the button
    Then the background color will change to white

   