import { signUp } from "./testModules/signUp";
import { survey } from "./testModules/survey";

describe("tests for contact-list", { testIsolation: false }, () => {
  it("creates a new account with preexisting circles-key", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    // signUp();


    // create preexisting account via routePath
    cy.visit("/#/passport/actions/login/1");

    cy.on("uncaught:exception", (err, runnable) => {
        return false;
    });

    cy.get("input").each(($input) => {
      cy.wrap($input).type("1");
    });

    cy.get("button[type=submit]").should("exist").click();

    cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
    .should("exist")
    .click();

    survey();

  });

  // it("opens the contacts-dapp", () => {
  //   cy.getByI18nKey("dapps.o-dashboard.pages.home.contacts")
  //     .should("exist")
  //     .click();
  // });
});
