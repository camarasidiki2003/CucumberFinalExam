package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
		WebDriver driver;
		public LoginPage(WebDriver driver) {
			this.driver = driver;
			
		}
		 @FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]")
		 WebElement SKY_BLUE_BUTTON_ELEMENT;
		 @FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
		 WebElement WHITE_BUTTON_ELEMENT;
		
		public void LaunchingWebsite() {
			driver.get("https://techfios.com/test/102/");
		}
		public void clickSkyBlueButton() {
			SKY_BLUE_BUTTON_ELEMENT.click();
		}
		public void clickwHITEButton() {
			WHITE_BUTTON_ELEMENT.click();
		}


	

}



