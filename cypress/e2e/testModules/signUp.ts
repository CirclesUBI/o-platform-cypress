import { getRandomPersonName } from "../../src/utils/randomNames";
import { survey } from "./survey";

export const signUp = () => {
  cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
    .should("exist")
    .click();

  cy.on("uncaught:exception", (err, runnable) => {
    if (
      err.message.includes(
        "Cannot read properties of null (reading 'circlesAddress')"
      )
    ) {
      return false;
    }
  });

  cy.contains("Login with Apple").should("exist").click();

  cy.get("input").each(($input) => {
    cy.wrap($input).type("1");
  });

  cy.get("button[type=submit]").should("exist").click();

  survey();

  cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

  // Get all 'button' elements and filter them by their text value
  cy.get("button").filter(':contains("Create new")').click();

  //const name = getRandomPersonName();
  cy.getById("firstName").type("John");

  cy.get("button").filter(':contains("Save")').click();

  cy.getById("lastName").type("Doe");

  cy.get("button").filter(':contains("Save")').click();

  cy.get("input[type=file]").selectFile("./cypress/static/Person.png", {
    force: true,
  });

  cy.get("button").filter(':contains("Submit")').click();

  it("sets the location", { retries: 3 }, () => {
    cy.getById("pacInput").type("Angkah selemadeg barat");
    cy.get(".pac-item", { timeout: 10000 })
      .should("be.visible")
      .first()
      .click();
  });

  //cy.getById("pacInput").type("Angkah selemadeg barat");

  cy.contains("Submit").click();
};
