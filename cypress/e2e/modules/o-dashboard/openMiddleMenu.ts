export const openMiddleMenu = () => {
  it("should open the middle-menu", () => {
    cy.getByClass("navlogo").should("exist").click();
  });
};


