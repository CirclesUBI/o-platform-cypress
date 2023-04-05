import { signUp } from "./functions/signUp";

describe("Passport", () => {
  it("tests the passport dapp", () => {
    cy.visit("/");
    signUp();

    cy.getByI18nKey("dapps.o-dashboard.pages.home.passport").should("exist").click();

    cy.getByClass("text-2xl cursor-pointer sm:text-4xl font-heading").should("exist").click();

    cy.get("input").clear().type("firstnametest");

    cy.contains("Save").should("exist").click();

    cy.get("input").clear().type("lastnametest");

    cy.contains("Save").should("exist").click();

    cy.getByClass("mt-1 text-sm text-center cursor-pointer").should("exist").click();

    cy.get("input[id='pacInput']").clear().type("Bandar");

    cy.get(".pac-item").should("exist").first().click();

    cy.contains("Submit").click();

    cy.getByClass("relative w-28 h-28 m-auto bg-white rounded-full").should("exist").click();


    cy.getByClass("absolute z-10 text-center align-top list-none cursor-pointer top-1 right-2 inline-table ").should("exist").click();
    
    cy.get("input[type=file]").selectFile("./cypress/static/image.png", {
      force: true,
    });

    cy.contains("Submit").click();

    cy.getByClass("flex items-center justify-center w-12 h-12 ml-4 bg-passport rounded-full cursor-pointer svelte-v0kil9 text-white").should("exist").click();

    cy.get("a[href='/#/passport/accounts']").should("exist").click();

    cy.getByClass("inline w-4 h-4 stroke-current text-primary").should("exist").click();
  });
});
