export const openPassport = () => {
  it("opens passport dapp", () => {
    cy.getByI18nKey("dapps.o-dashboard.pages.home.passport")
      .should("exist")
      .click();
  });
}