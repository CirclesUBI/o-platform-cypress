import { signUp } from "../modules/signUp";

describe("sign up", { testIsolation: false }, () => {
  it("signs up und creates an account", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    signUp();

    cy.visit("/");
  });
});
