export const openMarket = () => {
  cy.getByI18nKey("dapps.o-dashboard.pages.home.marketlisting").should("exist").click();
};