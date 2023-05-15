import { openContacts } from "../o-dashboard/openContacts";

export const contactsTests = () => {
  describe("contacts", { testIsolation: false }, () => {
    it("should navigate to contacts dapp", () => {
      cy.visit("/#/hopme")

      cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

      openContacts();
    });
  });
};