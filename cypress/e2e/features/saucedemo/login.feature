Feature: Saucedemo - Login Page
    Scenario: Login Success to Saucedemo
        Given I go to Saucedemo Login Page
        When I login with "standard_username" and "standard_password"
        Then I should be redirected to Saucedemo "Home" Page
        When I click menu icon
        And I logout from Saucedemo Home Page
        Then I should be redirected to Saucedemo "Login" Page

    # Scenario: Login Failed to Saucedemo - Locked Account
    #     Given I go to Saucedemo Login Page
    #     When I login with "locked_out_username" and "locked_out_password" on Saucedemo Login Page
    #     Then I should be stayed on Login Page
    #     And I should see error message "Sorry, this user has been locked out." on Saucedemo Login Page

    # Scenario: Login Failed to Saucedemo - Blank Username and Password
    #     Given I go to Saucedemo Login Page
    #     When I login with "blank_username" and "blank_password" on Saucedemo Login Page
    #     Then I should be stayed on Login Page
    #     And I should see error message "Username is required" on Saucedemo Login Page
    #     When I login with "standard_username" and "blank_password" on Saucedemo Login Page
    #     Then I should be stayed on Login Page
    #     And I should see error message "Password is required" on Saucedemo Login Page

    # Scenario: Login Failed to Saucedemo - Unregistered Username and Wrong Password
    #     Given I go to Saucedemo Login Page
    #     When I login with "random_username" and "standard_password" on Saucedemo Login Page
    #     Then I should be stayed on Login Page
    #     And I should see error message "Username and password do not match any user in this service" on Saucedemo Login Page
    #     When I login with "standard_username" and "random_password" on Saucedemo Login Page
    #     Then I should be stayed on Login Page
    #     And I should see error message "Username and password do not match any user in this service" on Saucedemo Login Page