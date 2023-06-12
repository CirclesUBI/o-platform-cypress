export const trustContact = () => {
  it("should open trust-context", () => {
    cy.getByI18nKey("dapps.common.quickactions.trustNewFriend").should("exist").click();
    cy.get("input[type=text]").should("exist").type("Person_10");
    cy.getByClass("max-w-full -mt-1 leading-8 cursor-pointer").should("exist").click();
    cy.get("button[type=submit]").should("exist").click();
    cy.get("button[type=submit]").should("exist").click();
  });
};