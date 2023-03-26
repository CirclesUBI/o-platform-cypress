import {getRandomPersonName, getRandomCompanyName} from "../src/utils/randomNames";

describe("sign up", () => {
  it(
    "passes",
    {
      retries: {
        runMode: 3,
        openMode: 3,
      },
    },
    () => {
      cy.visit("/");

      cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow")
        .should("exist")
        .click();

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

      cy.getById("pacInput").type("Angkah selemadeg barat");
      cy.get(".pac-item").should("exist").first().click();
      cy.contains("Submit vote").click();

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
  );
});


