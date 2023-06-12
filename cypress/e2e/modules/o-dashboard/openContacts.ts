export const openContacts = () => {
  it("should navigate to contacts dapp", () => {
    cy.getByI18nKey("dapps.o-dashboard.pages.home.contacts").should("exist").click();
  });
};