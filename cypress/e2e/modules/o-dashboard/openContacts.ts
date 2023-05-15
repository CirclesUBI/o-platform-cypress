export const openContacts = () => {
  cy.getByI18nKey("dapps.o-dashboard.pages.home.contacts").should("exist").click();
};