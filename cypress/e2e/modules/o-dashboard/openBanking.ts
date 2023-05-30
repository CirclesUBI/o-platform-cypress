export const openBanking = () => {

  cy.getByI18nKey("dapps.o-dashboard.pages.home.banking")
    .should("exist")
    .click();

}