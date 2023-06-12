/**
 * 
 * @param dappName 
 * 
 * The dappName parameter is used to find the correct dapp-button by i18n-key (e.g. "dapps.o-dashboard.pages.home.${dappName}")
 */

export const openDapp = (dappName: string) => {
  it("should navigate a dapp", () => {
    cy.getByI18nKey(`dapps.o-dashboard.pages.home.${dappName}`).should("exist").click();
  });
};