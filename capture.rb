require 'selenium-webdriver'

# http://jjbohn.info/blog/2013/07/31/how-to-take-a-screenshot-with-rubys-selenium-web-driver/

driver = Selenium::WebDriver.for :firefox
driver.navigate.to 'https://dev.to/garysieling_90/side-projects-invigorate-software-engineering-culture'

driver.save_screenshot('screenshot.png')

driver.quit
