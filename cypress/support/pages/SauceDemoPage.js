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
    assert(cy.ClickItemIfVisible(".error-message-container error"))

  }
  SuccessfulLogin() {
    cy.title().should('include', 'Swag Labs');
  }
  BuyAnItem(additem) {
    cy.xpath(`//div[@class="inventory_item_name"][contains(text(), '${additem}')]`).click();
    cy.xpath('//button[contains(text(),"Add to cart")]').click();
  }
  ClickBacktoItems() {
    cy.get('#back-to-products').click();
  }
  ValidateCheckout() {
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.get('#first-name').clear().type("xxxx");
    cy.get('#last-name').clear().type("yyyy");
    cy.get('#postal-code').clear().type("ttt");
    cy.get('#continue').click();
  }
  ValidateCost = () => {
    let getsubtotal = 0;
    let tax = 0;
    var total = 2;
    cy.xpath('//div[@class="summary_subtotal_label"]/text()[2]').invoke('text').then((text1) => {
      getsubtotal = Number(text1);
    })
    cy.xpath('//div[@class="summary_tax_label"]/text()[2]').invoke('text').then((text2) => {
      tax = Number(text2);
    })
    cy.xpath('//div[@class="summary_info_label summary_total_label"]/text()[2]').invoke('text').then((text3) => {
      total = Number(text3);
      expect(total).to.equal(getsubtotal + tax)
    })

  }
  FinishOrder(){
    cy.get('#finish').click();
    assert(cy.ClickItemIfVisible(".checkout_complete_container"),"Successfully Placed the order");
  }

}


export default SauceDemo;







