import { createNewShop } from "./functions/createNewShop";
import { signUp } from "./functions/signUp";

describe("create a shop", () => {
  

  it("creates a shop", () => {
    cy.visit("/");

    signUp();

    createNewShop();
    });
});