export const openPassport = () => {
  it("opens passport dapp", { retries: 2 }, () => {
    cy.getByI18nKey("dapps.o-dashboard.pages.home.passport")
      .should("exist")
      .click();
  });
};
