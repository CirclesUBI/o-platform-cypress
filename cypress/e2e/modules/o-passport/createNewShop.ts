import { getRandomCompanyName } from "../../../src/utils/randomNames";

export const createNewShop = () => {
  const companyName = getRandomCompanyName();

  it("opens the passport dapp", () => {
    cy.getByI18nKey("dapps.o-dashboard.pages.home.passport")
      .should("exist")
      .click();
  });

  it("opens shop-editor", () => {
    cy.get("button[class='btn btn-primary btn-sm']").should("exist").click();

    // cy.contains("Add new Shop").should("exist").click();
  });

  it("sets a name for the shop", () => {
    cy.getById("firstName").type(companyName);

    cy.get("button[type='submit']").should("exist").click();
  });

  it("sets a description for the shop", () => {
    cy.getById("description").type(
      companyName + " Has All The Things You Need"
    );

    cy.get("button[type='submit']").should("exist").click();
  });

  it("sets a location for the shop", { retries: 3 }, () => {
    cy.wait(1000);

    cy.getById("pacInput").type("Angkah selemadeg barat");

    cy.get(".pac-item").should("exist").first().click();

    cy.get("button[type='submit']").should("exist").click();
  });

  it("sets a logo for the shop", () => {
    cy.get("input[type=file]").selectFile("./cypress/static/Person.png", {
      force: true,
    });

    cy.get("button[class='btn transition-all overflow-hidden transform relative btn-primary svelte-12kbnbk px-8']").should("exist").click();
  });

  it("sets a phonenumber for the shop", () => {
    cy.getByI18nKey("dapps.o-passport.pages.upsertOrganization.phone")
      .should("exist")
      .parent()
      .find("input")
      .type("123456789");
  });

  it("sets the vendor type", () => {
    cy.get("select").eq(1).select("Sembako");
  });

  it("sets the opening hours", () => {
    cy.get("input[type=checkbox]").each(($el) => {
      if ($el.parent().find("label").children().first().text() === "Sunday") {
        cy.wrap($el).uncheck();
      } else {
        cy.wrap($el).check();
      }
    });
  });

  it("saves the shop", () => {
    cy.getByI18nKey("common.save").each(($el) => {
      cy.wrap($el).click();
    });
  });
};
