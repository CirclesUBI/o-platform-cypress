import { signUp } from "./functions/signUp";

describe("sign up", () => {
  it("signs up und creates an account", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    signUp();
  });
});
