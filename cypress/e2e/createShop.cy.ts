import { createNewShop } from "./functions/createNewShop";
import { signUp } from "./functions/signUp";

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
