import { getRandomCompanyName } from "../../src/utils/randomNames";

export const createNewShop = () => {
  cy.contains("passport").should("exist").click();

  cy.contains("Add new Shop").should("exist").click();

  const companyName = getRandomCompanyName();

  cy.getById("firstName").type(companyName);

  cy.get("button").filter(':contains("Save")').click();

  cy.getById("description").type(
    companyName + " Has All The Things You Need"
  );

  cy.get("button").filter(':contains("Save")').click();

  cy.getById("pacInput").type("Angkah selemadeg barat");
  cy.get(".pac-item").should("exist").first().click();

  cy.get("button").filter(':contains("Save")').click();

  cy.get("input[type=file]").selectFile("./cypress/static/Person.png", {
    force: true,
  });

  cy.contains("Submit").click();

  cy.getByI18nKey("dapps.o-passport.pages.upsertOrganization.phone")
    .should("exist")
    .parent()
    .find("input")
    .type("123456789");

  cy.getByClass("mt-1 select input w-full svelte-qnrv71").select("Sembako");

  cy.get("input[type=checkbox]").each(($el) => {
    if ($el.parent().find("label").children().first().text() === "Sunday") {
      cy.wrap($el).uncheck();
    } else {
      cy.wrap($el).check();
    }
  });

  cy.contains("Save").each(($el) => {
    cy.wrap($el).click();
  });
}