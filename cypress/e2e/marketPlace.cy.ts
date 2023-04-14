import { signUp } from "./functions/signUp";

describe("Marketplace", { testIsolation: false }, () => {
  it("signs up a new user", { retries: 3 }, () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");

    signUp();
  });

  it("marketplace is available on dashboard and leads to marketlisting", () => {
    cy.getByI18nKey("dapps.o-dashboard.pages.home.marketlisting")
      .should("exist")
      .click();
  });

  it("vendors should be sorted by nearest", () => {
    cy.contains("Nearest").should("exist");
  });

  it("opens favorites listing", () => {
    cy.getByClass("w-10 h-10 absolute top-[10%] right-[10%] text-yellow")
      .should("exist")
      .first()
      .click();

    cy.getByClass(
      "flex items-center justify-center w-12 h-12 ml-4 bg-market rounded-full cursor-pointer svelte-v0kil9 text-white"
    )
      .should("exist")
      .click();

    cy.getByI18nKey("Favorites").first().should("exist").click();
  });

  // describe("single markets", () => {
  //   it("checks single market", () => {
  //     cy.getByClass("relative w-full min-w-0").should("exist").click();
  //   });
  // });
});
