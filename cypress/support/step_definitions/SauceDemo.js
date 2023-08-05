import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
import SauceDemoPage from "../pages/SauceDemoPage";

const saucedemo = new SauceDemoPage();
Given('User launches the SauceDemo application', () => {
  saucedemo.LaunchApplication();
});
When('User enter the {string} credential and clicks login button', (user) => {
  saucedemo.EnterUserDetails(user);

});
Then('User gets an error message', () => {
  saucedemo.LoginError();
});
Then('User successfully lands on the SauceDemo application', () => {
  saucedemo.SuccessfulLogin();
});

Then('User verifies {string} of {string}', (getprice,getItem) => {
  saucedemo.VerifyItemPrice(getprice,getItem);
});
Then('User adds {string} to the cart', (getItem) => {
  saucedemo.AddItemToCart(getItem);
});



Then('User navigate back to products page', () => {
  saucedemo.ClickBacktoItems();
});
Then('User validates checkout details of the {string}', (user) => {
  saucedemo.ValidateCheckout(user);
  saucedemo.ValidateCost();
  saucedemo.FinishOrder();
});
