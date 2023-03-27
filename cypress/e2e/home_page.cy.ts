describe("sign up", () => {
  it(
    "passes",
    () => {
      cy.signUp();
      cy.createNewShop();
    }
  );
});


