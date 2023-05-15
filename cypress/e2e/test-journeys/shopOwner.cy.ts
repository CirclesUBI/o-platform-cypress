import { createNewShop } from "../modules/o-passport/createNewShop";
import { loginFirstPreSeededAccount } from "../modules/loginPreSeeded";

describe("organization context", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");
  });
  describe("login", () => {
    it("should login with first pre-seeded account", () => {
      loginFirstPreSeededAccount();
    });
  });

  describe("creating a shop", () => {
    createNewShop();
  });
});