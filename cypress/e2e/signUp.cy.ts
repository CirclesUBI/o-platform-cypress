import { signUp } from "./functions/signUp";

describe("sign up", () => {
  it("signs up und creates an account", () => {
    cy.visit("/");

    signUp();
  });
});


