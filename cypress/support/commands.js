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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("fillMandatoryFields", data => {
   
    cy.get('#first-name').type(data.firstname);
    cy.get('#last-name').type(data.lastname);
    cy.get('#email').type(data.email);
    cy.get("#agree").check()
});

Cypress.Commands.add("fillSomeFields", data => {
    cy.get('[name=cidade]').type(data.cidade);
    cy.get('[name=bairro]').type(data.bairro);

    cy.get("input[type='submit']").click();

})