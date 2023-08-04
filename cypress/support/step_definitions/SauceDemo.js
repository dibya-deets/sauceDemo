
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
import SauceDemoPage from "../pages/SauceDemoPage";

const saucedemo = new SauceDemoPage();
Given('User launches the SauceDemo application', () => {
  saucedemo.LaunchApplication();
});

When('User enter the {string} and clicks login button', (user) => {
  saucedemo.EnterUserDetails(user);

});
Then('User gets an error message', () => {
  saucedemo.LoginError();
});
Then('User successfully lands on the SauceDemo application', () => {
  saucedemo.SuccessfulLogin();
});

Then('User selects {string} item and adds to the cart', (getItem) => {
  saucedemo.BuyAnItem(getItem);
});

Then('User navigate back to products page', () => {
  saucedemo.ClickBacktoItems();
});
Then('User validates checkout', () => {
  saucedemo.ValidateCheckout();
  saucedemo.ValidateCost();
  saucedemo.FinishOrder();
});



