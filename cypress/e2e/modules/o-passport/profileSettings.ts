import { openPassport } from "../o-dashboard/openPassport";
import { openSideMenu } from "../openSideMenu";
import googleMapSearch from "../../components/googleMapSearch.cy";
import { getRandomPersonName } from "../../../src/utils/randomNames";

const editPhoto = "[data-cy=editPhoto]";
const randomName = getRandomPersonName();

let randNum = Math.floor(Math.random() * 9) + 1;

export const profileSettings = () => {
  describe("profile settings", () => {
    openPassport();

    it("sets new first- and last-name", () => {
      cy.getByClass("text-2xl cursor-pointer sm:text-4xl font-heading")
        .should("exist")
        .click();

      cy.get("input").clear().type(randomName.firstName);

      cy.get("button[type=submit]").should("exist").click();
      // cy.contains("Save").should("exist").click();

      cy.get("input").clear().type(randomName.lastName);

      cy.get("button[type=submit]").should("exist").click();
      // cy.contains("Save").should("exist").click();
    });

    it("sets new location", { retries: 4 }, () => {
      cy.getByClass("mt-1 text-sm text-center cursor-pointer")
        .should("exist")
        .click();

      cy.wait(1000);

      googleMapSearch.testGoogleMapSearch();
    });

    it("opens photo editor", () => {
      cy.getByClass("relative w-28 h-28 m-auto bg-white rounded-full")
        .should("exist")
        .click();
    });

    it("sets new profile picture", () => {
      cy.get(editPhoto).should("exist").click();
      cy.get("input[type=file]").should("exist");

      cy.get("input[type=file]").selectFile(
        "./cypress/static/" + randNum + ".jpg",
        {
          force: true,
        }
      );

      cy.get(".btn").should("exist").contains("Simpan").click();
    });

    it("opens accounts from side-menu checks if circles-address is expandable", () => {
      openSideMenu("bg-passport");
    });
  });
};
