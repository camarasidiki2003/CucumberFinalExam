package steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase{
	LoginPage loginPage;
	
	@Given("^\"([^\"]*)\" button exists$")
	public void button_exists(String signinButton) {
		initDriver();
		//loginPage.LaunchingWebsite();
		driver.get("http://techfios.com/test/102/");
		
	   	    
	}
	
	@When("^I click on the button$")
	public void i_click_on_the_button()  {
		loginPage =PageFactory.initElements(driver, LoginPage.class);
		loginPage.clickSkyBlueButton();
	    
	    
	}

	/*
	 * @When("^I click on the skybluebutton$") public void
	 * i_click_on_the_skyblue_button() { loginPage =PageFactory.initElements(driver,
	 * LoginPage.class); loginPage.clickSkyBlueButton(); }
	 */
	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() {
		 Assert.assertEquals(By.xpath("/html/body"), "Wrong page");
	   
	}
	
		
	  @When("^I click on the white button$") public void
	  i_click_on_the_white_button() { loginPage =PageFactory.initElements(driver,
	 LoginPage.class); loginPage. clickwHITEButton(); }
	 
	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white() {
		 Assert.assertEquals(By.xpath("/html/body"), "wrong page");
		   
	}

	
	
}
