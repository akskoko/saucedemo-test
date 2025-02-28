Feature: Saucedemo - Login Page
    Scenario: Login Success to Saucedemo
        Given I go to Saucedemo Login Page
        When I login with "standard_username" and "standard_password" on Saucedemo Login Page
        Then I should be redirected to Saucedemo "Home" Page
        When I click menu icon
        And I click about
        Then I should be redirected to Saucedemo "About" Page
