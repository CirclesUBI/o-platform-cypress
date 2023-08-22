import { getRandomCompanyName } from "../../../src/utils/randomNames";

import googleMapSearch from "../../components/googleMapSearch.cy";

const categorySelect = "[data-cy=categorySelect]";

let randNum = Math.floor(Math.random() * 9) + 1;

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

  it("sets a location for the shop", () => {
    googleMapSearch.testGoogleMapSearch();
  });

  it("sets a logo for the shop", () => {
    cy.get("input[type=file]").selectFile(
      "./cypress/static/" + randNum + ".jpg",
      {
        force: true,
      }
    );

    cy.get(".btn").contains("Simpan").click();
  });

  it("sets a phonenumber for the shop", () => {
    cy.getByI18nKey("dapps.o-passport.pages.upsertOrganization.phone")
      .should("exist")
      .parent()
      .find("input")
      .type("123456789");
  });

  it("sets the vendor type", () => {
    cy.get(categorySelect).should("exist");
    cy.get(categorySelect).select("1");
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
