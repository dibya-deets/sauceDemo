Feature: Validate SauceDemo Application
 Background: Launch application
 Given User launches the SauceDemo application
@TC1
Scenario Outline: User launches the application with correct credentials
When User enter the "<UserCredential>" and clicks login button
Then User successfully lands on the SauceDemo application

Examples:
   
|UserCredential| 
| testuser1|
@TC2
Scenario Outline: User launchs tha application with wrong credentials
When User enter the "<UserCredential>" and clicks login button
Then User gets an error message

Examples:
   
|UserCredential| 
| testuser2 |

@TC3
Scenario Outline: User Buy products and verifies the total cost
When User enter the "<UserCredential>" and clicks login button
Then User successfully lands on the SauceDemo application
Then User selects "<getItem1>" item and adds to the cart
Then User navigate back to products page
Then User selects "<getItem2>" item and adds to the cart
Then User validates checkout

Examples:
   
| UserCredential | getItem1                | getItem2 |
| testuser1      | Sauce Labs Bolt T-Shirt | Sauce Labs Backpack  |






