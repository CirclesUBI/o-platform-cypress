import { openPassport } from "./o-dashboard/openPassport";
import { survey } from "./survey";

export const loginFirstPreSeededAccount = () => {
  // cy.visit("/#/passport/actions/logout");

  // cy.wait(5000);

  cy.visit("/#/passport/actions/login/2");

  cy.get("button[class='relative btn btn-block btn-primary']")
    .should("exist")
    .click();

  cy.get("input").each(($input) => {
    cy.wrap($input).type("1");
  });

  cy.get("button[class='relative btn btn-block btn-primary']")
    .should("exist")
    .click();

  cy.wait(1000);

  cy.url().then(($url) => {
    if ($url.split("#")[1] == "/home") {
      cy.log($url.split("#")[1]);
      return;
    } else {
      cy.log($url.split("#")[1]);
      survey();

      cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
        .should("exist")
        .click();

      cy.get("button").eq(1).should("exist").click();

      cy.get("textarea").type(Cypress.env("keyPhrase"));

      cy.get("button[type=submit]").should("exist").click();

      cy.get("input").should("exist").click();

      cy.contains("Person_10").should("exist").click();

      cy.get("button[type=submit]").should("exist").click();
      cy.get("button[type=submit]").should("exist").click();
    }
  });
};

export const loginSecondPreSeededAccount = () => {
  // cy.visit("/#/passport/actions/logout");

  // cy.wait(5000);

  cy.visit("/#/passport/actions/login/3");

  cy.get("button[class='relative btn btn-block btn-primary']")
    .should("exist")
    .click();

  cy.get("input").each(($input) => {
    cy.wrap($input).type("1");
  });

  cy.get("button[type=submit]").should("exist").click();

  cy.wait(1000);

  cy.url().then(($url) => {
    if ($url.split("#")[1] == "/home") {
      cy.log($url.split("#")[1]);
      return;
    } else {
      cy.log($url.split("#")[1]);
      survey();

      cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
        .should("exist")
        .click();

      cy.get("button").eq(1).should("exist").click();

      cy.get("textarea").type(Cypress.env("keyPhrase"));

      cy.get("button[type=submit]").should("exist").click();

      cy.get("input").should("exist").click();

      cy.contains("Person_9").should("exist").click();

      cy.get("button[type=submit]").should("exist").click();
      cy.get("button[type=submit]").should("exist").click();
    }
  });
};
