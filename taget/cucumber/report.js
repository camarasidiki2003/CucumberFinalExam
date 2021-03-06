$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: scamaratech@gmail.com"
    }
  ],
  "line": 4,
  "name": "Cucumber Final Project",
  "description": "",
  "id": "cucumber-final-project",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Background"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Sky Blue Background",
  "description": "",
  "id": "cucumber-final-project;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Background1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "LoginStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 3754708300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 79956600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 1505900,
  "error_message": "java.lang.AssertionError: expected:\u003cBy.xpath: /html/body\u003e but was:\u003cWrong page\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.LoginStepDefinition.the_background_color_will_change_to_sky_blue(LoginStepDefinition.java:40)\r\n\tat ✽.Then the background color will change to sky blue(features/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "White Background Change",
  "description": "",
  "id": "cucumber-final-project;white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Background2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "LoginStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 2824967800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 49904500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 131500,
  "error_message": "java.lang.AssertionError: expected:\u003cBy.xpath: /html/body\u003e but was:\u003cwrong page\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.LoginStepDefinition.the_background_color_will_change_to_white(LoginStepDefinition.java:51)\r\n\tat ✽.Then the background color will change to white(features/Login.feature:15)\r\n",
  "status": "failed"
});
});