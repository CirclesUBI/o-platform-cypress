/**
 * can trust a contact only from the contact page and if the contact is not trusted
 */

export const trustContact = () => {
  it("trusts a contact", () => {
    cy.contains("Person_10").should("exist").click();

    cy.getByClass("table-cell w-12 h-12 align-middle rounded-full  inline bg-light-light").eq(1).should("exist").click();

    cy.get("button[type=submit]").should("exist").click();
  });
};