import { signupJourney } from "../modules/signupJourney";

describe("tests for the sign-up journey", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/").then(($url) => { console.log($url) });
  });
  describe("journey", () => {
    it("should pass the signup-journey", () => {
      signupJourney();
    });

    it("imports existing account", () => {
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

    })
  });
});