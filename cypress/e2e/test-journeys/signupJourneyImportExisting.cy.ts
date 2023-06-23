import { survey } from "../modules/survey";

describe("tests for the signup-survey", () => {

  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");
    cy.wait(5000);
  });

  it("runs tests for the survey", () => {
    // cy.visit("/#/passport/actions/logout");

    // cy.wait(5000);

    cy.visit("/#/passport/actions/login/3");

    // cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

    cy.get("input").each(($input) => {
      cy.wrap($input).type("1");
    });

    cy.get("button[type=submit]").should("exist").click();

    cy.wait(1000);

    cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

    survey();
  })
})


