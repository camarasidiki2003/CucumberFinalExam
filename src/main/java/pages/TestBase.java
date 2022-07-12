package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class TestBase {
	public static WebDriver driver;
	public static void initDriver() {
		System.setProperty("webdriver.edge.driver", "drivers\\msedgedriver.exe");
		driver = new EdgeDriver();
		driver.manage().deleteAllCookies();
		//driver.get("https://techfios.com/test/102/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}

}
