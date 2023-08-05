import * as locate from '../locators/locators_sd.js';
import userdata from '../../fixtures/userdata.json';
class SauceDemo {

  LaunchApplication() {
    // cy.forceVisit("https://www.saucedemo.com",{headers: {"Accept-Encoding": "gzip, deflate"}});
    cy.visit("https://www.saucedemo.com");
  }
  EnterUserDetails(user) {
    // cy.visit("https://www.saucedemo.com",{headers: {"Accept-Encoding": "gzip, deflate"}});
    let id = "userid";
    let pwd = "password";
    let userid = userdata[user][id]
    let password = userdata[user][pwd]
    cy.get(locate.USER_ID).clear().type(userid)
    cy.get(locate.PASSWORD).clear().type(password)
    cy.get(locate.LOGIN_BUTTON).click();
  }
  LoginError() {
    // if(cy.ClickItemIfVisible(".error-message-container error")){
    //  cy.xpath('//h3[@data-test="error"]').asss
    assert(cy.ClickItemIfVisible(locate.ERROR_MESSAGE))

  }
  SuccessfulLogin() {
    cy.title().should('include', 'Swag Labs');
  }
  VerifyItemPrice(getprice,getItem) {
    cy.xpath(locate.ITEM(getItem)).should('be.visible');
    cy.xpath(locate.ITEM_PRICE(getItem)).invoke('text').then((text1)=>{
      expect(text1).to.eq(getprice);
})
  }

  AddItemToCart(addItem){
    cy.xpath(locate.ADD_ITEM_TO_CART(addItem)).click();
  }
  ClickBacktoItems() {
    cy.get(locate.BACK_TO_ITEMS).click();
  }
 ValidateCheckout(user) {
  let fn = "firstName";
  let ln = "LastName";
  let pstcd="postCode";

  let firstName=userdata[user][fn]
  let lastName=userdata[user][ln]
  let postCode=userdata[user][pstcd]

  
    cy.get(locate.ADD_TO_CART_BUTTON).click();
    cy.get(locate.CHECKOUT_BUTTON).click();
    cy.get(locate.FIRST_NAME_FIELD).clear().type(firstName);
    cy.get(locate.LAST_NAME_FIELD).clear().type(lastName);
    cy.get(locate.POSTAL_CODE).clear().type(postCode);
    cy.get(locate.CONTINUE_BUTTON).click();
  }
  ValidateCost = () => {
    let getsubtotal = 0;
    let tax = 0;
    var total = 2;
    cy.xpath(locate.SUBTOTAL).invoke('text').then((text1) => {
      getsubtotal = Number(text1);
    })
    cy.xpath(locate.TAX).invoke('text').then((text2) => {
      tax = Number(text2);
    })
    cy.xpath(locate.TOTAL_PRICE).invoke('text').then((text3) => {
      total = Number(text3);
      expect(total).to.equal(getsubtotal + tax)
    })

  }
  FinishOrder(){
    cy.get(locate.FINISH_BUTTON).click();
    assert(cy.ClickItemIfVisible(locate.CHECKOUT_SUCCESS),"Successfully Placed the order");
  }

}

export default SauceDemo;
