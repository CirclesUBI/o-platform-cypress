import { loginFirstPreSeededAccount } from "./testModules/loginPreSeeded";
import { survey } from "./testModules/survey";

describe("Pre-seeded account", { testIsolation: false }, () => {
  it("sets up first pre-seeded account", { retries: 2 }, () => {

    loginFirstPreSeededAccount();

  });

  // it("sets up second pre-seeded account", { retries: 2 }, () => {

  //   cy.visit("/#/passport/actions/logout");

  //   cy.wait(5000);

  //   cy.visit("/#/passport/actions/login/3");

  //   cy.on("uncaught:exception", (err, runnable) => {
  //     return false;
  //   });

  //   cy.get("input").each(($input) => {
  //     cy.wrap($input).type("1");
  //   });

  //   cy.get("button[type=submit]").should("exist").click();

  //   survey();

  //   cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
  //     .should("exist")
  //     .click();

  //   cy.get("button").eq(1).should("exist").click();

  //   cy.get("textarea").type(Cypress.env("keyPhrase"));

  //   cy.get("button[type=submit]").should("exist").click();

  //   cy.get("input").should("exist").click();

  //   cy.contains("Person_11").should("exist").click();

  //   cy.get("button[type=submit]").should("exist").click();
  //   cy.get("button[type=submit]").should("exist").click();
  // });
});