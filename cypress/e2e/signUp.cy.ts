import { signUp } from "./testModules/signUp";
import { survey } from "./testModules/survey";

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
