export const openBanking = () => {
  it("opens banking dapp", () => {
    cy.getByI18nKey("dapps.o-dashboard.pages.home.banking")
      .should("exist")
      .click();
  });
}