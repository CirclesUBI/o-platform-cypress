import { openContacts } from "../o-dashboard/openContacts";
import { trustContact } from "./modules/trusting";

export const contactsTests = () => {
  describe("contacts", { testIsolation: false }, () => {
    it("should navigate to contacts dapp", () => {
      cy.visit("/#/home")

      cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

      openContacts();

    });

    describe("trust contact", () => {
      trustContact();
    });
  });
};