import { openMarket } from "../o-dashboard/openMarket";

export const marketTests = () => {
  describe("market", { testIsolation: false }, () => {
    it("should navigate to market dapp", () => {
      cy.visit("/#/home")

      // cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click();

      openMarket();
    });
  });
};