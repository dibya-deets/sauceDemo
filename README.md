# sauceDemo
 

Table of Contents
Introduction
Getting Started
Project Structure
Running Tests
Custom Commands
Plugins
Reporting


Introduction
For this assessment I have used Cypress UI automation and integrated it with cucumber framework. This test automation has been built to validate the SauceDemo Application (https://www.saucedemo.com/). There are three test cases which validates the login and product purchase functionalities.

Getting Started
To get started with the Cypress UI Automation project, follow these steps:

pre requisite:
Node.js and npm (Node Package Manager) installed.
Install Cypress
write your test cases in feature files and it's relevant code in step definition file.

Project Structure

cypress/e2e/ # Test files go here
cypress/fixtures/ #Test data goes here
cypress/reports/  #Test reports go here
cypress/support/   #locators, stepdefinition, pages go here


Running Tests
To run tests locally, I have used the following command:
-> npx cypress run: run tests in headless mode
-> npm cypress open: Cypress will open its test runner interface and we can select individual tests


Custom Commands
I have written the required custom commands in  cypress/support/commands.js.

Example custom command:

Plugins
I have used xpath plugin

Reporting
For reporting I have used mochaawesome reporter.

