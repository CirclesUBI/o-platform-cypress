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

/// <reference types="cypress" />

import cypress = require("cypress");


Cypress.Commands.add('getByI18nKey', (selector) => {
  return cy.get(`[data-i18n-key="${selector}"]`)
});

Cypress.Commands.add("getById", (selector) => {
  return cy.get(`[id="${selector}"]`)
});

Cypress.Commands.add("getByClass", (selector) => {
  return cy.get(`[class="${selector}"]`)
});
