import { survey } from "./survey";

export const preSeededAccount = () => {
  it("clears all cookies, local storage, and session storage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    cy.visit("/#/passport/actions/login/1");

    cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

    cy.get("input").each(($input) => {
      cy.wrap($input).type("1");
    });

    cy.get("button[type=submit]").should("exist").click();

    cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
      .should("exist")
      .click();
  });


  it("creates runs the survey", () => {
    survey();
  });

  it("sets up a preseeded account", () => {

    cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
      .should("exist")
      .click();
  });
}