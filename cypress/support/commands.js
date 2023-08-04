// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Custom command for reading value from table

Cypress.Commands.add('ClickitemwithLabel', (label) => {
    cy.get('a').contains(label)
})
//Click item if visible
Cypress.Commands.add('ClickItemIfVisible', (cssSelector) => {
    let Value = false;
    console.log("locator is : " + cssSelector)
    cy.get('body').then((body) => {
        if (body.find(cssSelector)) {
            Value = true;
            console.log("Divya value : ", Value)
        }
        console.log("Divya returned value  : ", Value)
        return false;
    })

})

//Select a value from the list

Cypress.Commands.add('SelectOneValue', (listItem) => {
    cy.get(listItem).then((items) => {
        items[3].click();
    })
})

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});
