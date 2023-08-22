/**
 *
 * The context-parameter e.g. "bg-market" or "bg-contacts" is used to find the correct side-menu-button by tailwind-class
 * @param context
 */

export const openSideMenu = (context: string) => {
  it("should open side-menu", () => {
    cy.getByClass(
      `flex items-center justify-center w-12 h-12 ml-4 ${context} rounded-full cursor-pointer text-white`
    )
      .should("exist")
      .click();
  });
};
