import { signUp } from "../modules/signUp";

describe("sign up", { testIsolation: false }, () => {
  it("signs up und creates an account", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    signUp();

    cy.visit("/");
  });
});
