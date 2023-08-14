import { openPassport } from "../o-dashboard/openPassport";
import { openSideMenu } from "../openSideMenu";

export const profileSettings = () => {
  describe("profile settings", () => {


    openPassport();



    it("sets new first- and last-name", () => {

      cy.getByClass("text-2xl cursor-pointer sm:text-4xl font-heading")
        .should("exist")
        .click();

      cy.get("input").clear().type("firstnametest");

      cy.get("button[type=submit]").should("exist").click();
      // cy.contains("Save").should("exist").click();

      cy.get("input").clear().type("lastnametest");

      cy.get("button[type=submit]").should("exist").click();
      // cy.contains("Save").should("exist").click();
    });

    it("sets new location", { retries: 4 }, () => {

      cy.getByClass("mt-1 text-sm text-center cursor-pointer")
        .should("exist")
        .click();

      cy.wait(1000);

      cy.get("input[id='pacInput']").clear().wait(1000).type("Bandar");

      cy.get(".pac-item-query").should("exist").first().click();

      cy.get("button[type=submit]").should("exist").click();
    });

    // it("sets new profile picture", () => {


    //   cy.getByClass("relative w-28 h-28 m-auto bg-white rounded-full")
    //     .should("exist")
    //     .click();

    //   cy.getByClass("input[type=file]").should("exist").click();
    //   cy.wait(1000);

    //   if (checkIfElementExists("relative inline-flex")) {
    //     cy.getByClass("table-cell w-10 h-10 align-middle bg-black rounded-full text-primary bg-opacity-60")
    //       .should("exist")
    //       .click();
    //   } else {
    //     cy.get("input[type=file]").selectFile("./cypress/static/image.png", {
    //       force: true,
    //     });
    //   }



    //   cy.contains("Submit").click();
    // });

    it("opens accounts from side-menu checks if circles-address is expandable", () => {
      openSideMenu("bg-passport");
    });
  });
};