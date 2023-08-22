import { getRandomPersonName } from "../../src/utils/randomNames";
import { survey } from "./survey";

import googleMapSearch from "../components/googleMapSearch.cy";

const randomName = getRandomPersonName();

export const signUp = () => {
  cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
    .should("exist")
    .click();

  cy.get("button[class='relative btn btn-block btn-primary']")
    .should("exist")
    .click();

  cy.get("input")
    .should("exist")
    .each(($input) => {
      cy.wrap($input).type("1");
    });

  cy.get("button[type=submit]").should("exist").click();

  survey();

  cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
    .should("exist")
    .click();

  cy.get("button").eq(0).click();

  cy.getById("firstName").type(randomName.firstName);

  cy.get("button[type='submit']").click();

  cy.getById("lastName").type(randomName.lastName);

  cy.get("button[type='submit']").click();

  cy.get("input[type=file]").selectFile("./cypress/static/Person.png", {
    force: true,
  });

  cy.get(".btn").contains("Simpan").click();

  googleMapSearch.testGoogleMapSearch();
};
