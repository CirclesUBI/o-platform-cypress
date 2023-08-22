import { createNewShop } from "../modules/o-passport/createNewShop";
import { loginFirstPreSeededAccount } from "../modules/loginPreSeeded";
import { signUp } from "../modules/signUp";

describe("organization context", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");
  });

  describe("signup new user", () => {
    it("should signup", () => {
      signUp();
    });
  });

  describe("creating a shop", () => {
    createNewShop();
  });
});
