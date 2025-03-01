import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../page_objects/pom_login";
import addToCartPage from "../page_objects/pom_add_to_cart";
import aboutPage from "../page_objects/pom_about";

// ***********************************************
// GIVEN SYNTAX LIST
// ***********************************************

Given("I go to Saucedemo Login Page", () => {
  cy.visit("https://www.saucedemo.com/");
});

// ***********************************************
// WHEN SYNTAX LIST
// ***********************************************

When(
  "I login with {string} and {string}",
  (email: string, password: string) => {
    const credentials = `${email}&&${password}`;

    switch (credentials) {
      case "standard_username&&standard_password":
        cy.log(`Login with valid credential`);
        cy.xpath(loginPage.txbEmail).type("standard_user");
        cy.xpath(loginPage.txbPassword).type("secret_sauce");
        cy.xpath(loginPage.btnLogin).click();
        break;
      case "locked_out_username&&locked_out_password":
        cy.log(`Login with locked credential`);
        cy.xpath(loginPage.txbEmail).type("locked_out_user");
        cy.xpath(loginPage.txbPassword).type("secret_sauce");
        cy.xpath(loginPage.btnLogin).click();
        break;
      case "blank_username&&blank_password":
        cy.log(`Login with blank username credential`);
        cy.xpath(loginPage.txbEmail).type("");
        cy.xpath(loginPage.txbPassword).type("");
        cy.xpath(loginPage.btnLogin).click();
        break;
      case "standard_username&&blank_password":
        cy.log(`Login with blank password credential`);
        cy.xpath(loginPage.txbEmail).type("");
        cy.xpath(loginPage.txbPassword).type("");
        cy.xpath(loginPage.btnLogin).click();
        break;
      case "random_username&&standard_password":
        cy.log(`Login with random username credential`);
        cy.xpath(loginPage.txbEmail).type("test1234");
        cy.xpath(loginPage.txbPassword).type("secret_sauce");
        cy.xpath(loginPage.btnLogin).click();
        break;
      case "standard_username&&random_password":
        cy.log(`Login with wrong password credential`);
        cy.xpath(loginPage.txbEmail).type("standard_user");
        cy.xpath(loginPage.txbPassword).type("test1234");
        cy.xpath(loginPage.btnLogin).click();
        break;
      default:
        cy.log("Incorrect credential data");
        break;
    }
  }
);

When("I click menu icon", () => {
  cy.xpath(loginPage.btnMenu).click();
});

When("I logout from Saucedemo Home Page", () => {
  cy.xpath(loginPage.btnLogout).click();
});

When("I add {string} to cart", (item: string) => {
  cy.xpath(addToCartPage.txtItemName(item)).should("be.visible");
  cy.xpath(addToCartPage.btnAddToCartBackpack).click();
});

When("I click cart icon", () => {
  cy.xpath(addToCartPage.btnCart).click();
});

When("I remove {string} from cart", (item: string) => {
  cy.xpath(addToCartPage.txtItemName(item)).should("be.visible");
  cy.xpath(addToCartPage.btnRemoveBackpackFromCart).click();
});

When("I click continue shopping", () => {
  cy.xpath(addToCartPage.btnContinueShopping).click();
});

When("I click about", () => {
  cy.xpath(aboutPage.btnAbout).click();
});

// ***********************************************
// THEN SYNTAX LIST
// ***********************************************

Then("I should be redirected to Saucedemo {string} Page", (page: string) => {
  switch (page) {
    case "Login":
      cy.xpath(loginPage.txtHomeTitle).should("be.visible");
      break;
    case "Home":
      cy.url().should("include", "/inventory.html");
      break;
    case "Cart":
      cy.url().should("include", "/cart.html");
      break;
    case "About":
      cy.origin("https://saucelabs.com", () => {
        cy.on("uncaught:exception", (e) => {
          return false;
        });
      });
      break;
    default:
      cy.log("Incorrect page data");
      break;
  }
});

Then("I should be stayed on Login Page", () => {
  cy.xpath(loginPage.txtHomeTitle).should("be.visible");
});

Then(
  "I should see error message {string} on Saucedemo Login Page",
  (error: string) => {
    switch (error) {
      case "Sorry, this user has been locked out.":
        cy.xpath(loginPage.errorLockedAccount).should("be.visible");
        break;
      case "Username is required":
        cy.xpath(loginPage.errorMissingUsername).should("be.visible");
        break;
      case "Password is required":
        cy.xpath(loginPage.errorMissingPassword).should("be.visible");
        break;
      case "Username and password do not match any user in this service":
        cy.xpath(loginPage.errorWrongCredential).should("be.visible");
        break;
      default:
        cy.log("Incorrect error data");
        break;
    }
  }
);

Then("I should see total items in cart updated", () => {
  cy.xpath(addToCartPage.txtUpdatedCart).should("be.visible");
});

Then("I should not see items in cart", () => {
  cy.xpath(addToCartPage.txtUpdatedCart).should("not.exist");
});

Then("I should see {string} in cart", (item: string) => {
  cy.xpath(addToCartPage.txtItemName(item)).should("be.visible");
});
