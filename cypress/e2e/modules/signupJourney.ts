import { survey } from "./survey";

export const signupJourney = () => {
  cy.visit("/");

  cy.get("button[class='relative btn btn-block btn-primary']")
    .should("exist")
    .click();

  cy.get("input").each(($input) => {
    cy.wrap($input).type("1");
  });

  cy.get("button[type=submit]").should("exist").click();

  cy.wait(1000);

  survey();
};
