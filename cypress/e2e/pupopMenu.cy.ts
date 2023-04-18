import { signUp } from "./functions/signUp";

describe("maxFlow", { testIsolation: false }, () => {
  it("creates an account to initialize me-object", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    signUp();
  });

  it("opens the popup-menu and searches for a user to trust", () => {
    cy.getByClass("navlogo").should("exist").click();

    cy.contains("Trust new Friend").should("exist").click();

    cy.get("input").should("exist").type("person");

    // cy.contains("Log out of device").should("exist").click();

    // cy.clearAllSessionStorage();
    // cy.clearAllCookies();
    // cy.clearAllLocalStorage();

    // cy.visit("/#/passport/actions/login/1");

    // // cy.visit("/#/passport/actions/logout");
    // cy.on("uncaught:exception", (err, runnable) => {
    //   return false;
    // });
    // // cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
    // //   .should("exist")
    // //   .click();
    // // cy.contains("Login with Apple").should("exist").click();
    // cy.get("input").each(($input) => {
    //   cy.wrap($input).type("1");
    // });
    // cy.get("button[type=submit]").should("exist").click();
  });

  it("sends trust to user", () => {
    cy.contains("Person_1").should("exist").click();

    cy.get("button[type=submit]").should("exist").click();

    cy.get("button[type=submit]").should("exist").click();
  });

  it("opens the popup-menu", () => {
    cy.getByClass("navlogo").should("exist").click();
  });
});
