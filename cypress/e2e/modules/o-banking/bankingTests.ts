import { openBanking } from "../o-dashboard/openBanking";

export const bankingTests = () => {
  describe("banking", { testIsolation: false }, () => {
    it("should navigate to banking dapp", () => {
      cy.visit("/#/hopme")

      cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

      openBanking();
    });
  });
};