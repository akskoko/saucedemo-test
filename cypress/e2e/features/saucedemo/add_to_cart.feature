Feature: Saucedemo - Add to Cart
    Scenario: Add to cart in Saucedemo
        Given I go to Saucedemo Login Page
        When I login with "standard_username" and "standard_password"
        Then I should be redirected to Saucedemo "Home" Page
        When I add "Sauce Labs Backpack" to cart
        Then I should see total items in cart updated
        When I click cart icon
        Then I should be redirected to Saucedemo "Cart" Page
        And I should see "Sauce Labs Backpack" in cart
        When I remove "Sauce Labs Backpack" from cart
        And I click continue shopping
        Then I should be redirected to Saucedemo "Home" Page
        And I should not see items in cart
        When I click menu icon
        And I logout from Saucedemo Home Page
        Then I should be redirected to Saucedemo "Login" Page
