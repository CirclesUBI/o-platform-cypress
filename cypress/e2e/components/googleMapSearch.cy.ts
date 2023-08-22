import value from "../../fixtures/testData";

const enterLocationInput = "[data-cy=enterLocationInput]";

const googleMapSearch = {
  enterLocationInput,
  testGoogleMapSearch: () => {
    cy.get(enterLocationInput).type(value.location);
    cy.get(".pac-item", { timeout: 10000 }).should("be.visible");
    cy.get(enterLocationInput).type("{downarrow}");
    cy.get(enterLocationInput).type("{enter}");

    cy.get("button[type='submit']").should("exist").click();
  },
};

export default googleMapSearch;
