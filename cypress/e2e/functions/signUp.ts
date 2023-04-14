import { getRandomPersonName } from "../../src/utils/randomNames";

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

  cy.contains("Next").should("exist").click();

  cy.getById("check-1").check();
  cy.getById("check-2").check();
  cy.getById("check-3").check();

  cy.contains("Next").should("exist").click();

  cy.getById("check-1").check();
  cy.getById("check-2").check();
  cy.getById("check-3").check();

  cy.contains("Next").should("exist").click();

  // Datepicker
  cy.getById("my-picker").click();

  cy.getByClass("numInput cur-year").type("1986");

  cy.getByClass("flatpickr-monthDropdown-months").select("November");

  cy.contains("21").click();

  //

  cy.getByClass("grow text-base svelte-qnrv71 select").each(($input) => {
    cy.wrap($input).select(1);
  });

  cy.contains("Scan Invite Now").focus().click();

  cy.contains("Next").should("exist").click();
  cy.contains("Sign up Now").should("exist").click();
  cy.contains("SIGN IN NOW").should("exist").click();

  // Get all 'button' elements and filter them by their text value
  cy.get("button").filter(':contains("Create new")').click();

  const name = getRandomPersonName();
  cy.getById("firstName").type(name.firstName);

  cy.get("button").filter(':contains("Save")').click();

  cy.getById("lastName").type(name.lastName);

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
