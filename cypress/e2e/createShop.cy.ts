import { createNewShop } from "./testModules/createNewShop";
import { loginFirstPreSeededAccount } from "./testModules/loginPreSeeded";

describe("create a shop", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    loginFirstPreSeededAccount();
  });

  createNewShop();
});
