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

//import cypress = require("cypress");
import {getRandomCompanyName, getRandomPersonName} from "../src/utils/randomNames";


Cypress.Commands.add('getByI18nKey', (selector) => {
  return cy.get(`[data-i18n-key="${selector}"]`)
});

Cypress.Commands.add("getById", (selector) => {
  return cy.get(`[id="${selector}"]`)
});

Cypress.Commands.add("getByClass", (selector) => {
  return cy.get(`[class="${selector}"]`)
});

Cypress.Commands.add("signUp", () => {
  cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
    .should("exist")
    .click();

  cy.contains("Login with Apple").should("exist").click();

  cy.get("input").each(($input) => {
    cy.wrap($input).type("1");
  });

  cy.get("button[type=submit]").should("exist").click();

  cy.contains("Next").should("exist").click();

  cy.getById("check-1").check();
  cy.getById("check-2").check();
  cy.getById("check-3").check();

  cy.contains("Next").should("exist").click();

  cy.getById("check-1").check();
  cy.getById("check-2").check();
  cy.getById("check-3").check();

  cy.contains("Next").should("exist").click();

  // Datepicker
  cy.getById("my-picker").click();

  cy.getByClass("numInput cur-year").type("1986");

  cy.getByClass("flatpickr-monthDropdown-months").select("November");

  cy.contains("21").click();

  //

  cy.getByClass("grow text-base svelte-qnrv71 select").each(($input) => {
    cy.wrap($input).select(1);
  });

  cy.contains("Scan Invite Now").focus().click();

  cy.contains("Next").should("exist").click();
  cy.contains("Sign up Now").should("exist").click();
  cy.contains("SIGN IN NOW").should("exist").click();

  // Get all 'button' elements and filter them by their text value
  cy.get("button").filter(':contains("Create new")').click();

  const name = getRandomPersonName();
  cy.getById("firstName").type(name.firstName);

  cy.get("button").filter(':contains("Save")').click();

  cy.getById("lastName").type(name.lastName);

  cy.get("button").filter(':contains("Save")').click();

  cy.get("input[type=file]").selectFile("./cypress/static/Person.png", {
    force: true,
  });

  cy.get("button").filter(':contains("Submit")').click();

  cy.getById("pacInput").type("Angkah selemadeg barat");
  cy.get(".pac-item", { timeout: 10000}).should("be.visible").first().click();
  cy.contains("Submit").click();
});



Cypress.Commands.add("createNewShop", () => {
  cy.contains("passport").should("exist").click();

  cy.contains("Add new Shop").should("exist").click();

  const companyName = getRandomCompanyName();

  cy.getById("firstName").type(companyName);

  cy.get("button").filter(':contains("Save")').click();

  cy.getById("description").type(
    companyName + " Has All The Things You Need"
  );

  cy.get("button").filter(':contains("Save")').click();

  cy.getById("pacInput").type("Angkah selemadeg barat");
  cy.get(".pac-item").should("exist").first().click();

  cy.get("button").filter(':contains("Save")').click();

  cy.get("input[type=file]").selectFile("./cypress/static/Person.png", {
    force: true,
  });

  cy.contains("Submit").click();

  cy.getByI18nKey("dapps.o-passport.pages.upsertOrganization.phone")
    .should("exist")
    .parent()
    .find("input")
    .type("123456789");

  cy.getByClass("mt-1 select input w-full svelte-qnrv71").select("Sembako");

  cy.get("input[type=checkbox]").each(($el) => {
    if ($el.parent().find("label").children().first().text() === "Sunday") {
      cy.wrap($el).uncheck();
    } else {
      cy.wrap($el).check();
    }
  });

  cy.contains("Save").each(($el) => {
    cy.wrap($el).click();
  });
});
