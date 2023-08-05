Feature: Validate SauceDemo Application
 Background: Launch application
 Given User launches the SauceDemo application
@TC1
Scenario Outline: User launches the application with correct credentials
When User enter the "<User>" credential and clicks login button
Then User successfully lands on the SauceDemo application

Examples:
   
|User| 
| testuser1|
@TC2
Scenario Outline: User launchs tha application with wrong credentials
When User enter the "<User>" credential and clicks login button
Then User gets an error message

Examples:
   
|User| 
| testuser2 |

@TC3
Scenario Outline: User Buy products and verifies the total cost
When User enter the "<User>" credential and clicks login button
Then User successfully lands on the SauceDemo application
Then User verifies "<getprice1>" of "<getItem1>"
And User adds "<getItem1>" to the cart
And User adds "<getItem2>" to the cart
Then User validates checkout details of the "<User>"

Examples:
   
| User | getItem1 | getItem2 | getprice1 |
| testuser1 | Sauce Labs Bolt T-Shirt | Sauce Labs Backpack | $15.99 |
