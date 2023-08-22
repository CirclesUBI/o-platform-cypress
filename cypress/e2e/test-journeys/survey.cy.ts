import { survey } from "../modules/survey";

describe("tests for the sign-up journey", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");
  });
  describe("Survey test", () => {
    it("should pass the survey", () => {
      cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
        .should("exist")
        .click();

      cy.get("button[class='relative btn btn-block btn-primary']")
        .should("exist")
        .click();

      cy.get("input")
        .should("exist")
        .each(($input) => {
          cy.wrap($input).type("1");
        });

      cy.get("button[type=submit]").should("exist").click();

      survey();
    });
  });
});
