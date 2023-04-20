import { createNewShop } from "./testModules/createNewShop";
import { signUp } from "./testModules/signUp";

describe("create a shop", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    signUp();
  });

  createNewShop();
});
