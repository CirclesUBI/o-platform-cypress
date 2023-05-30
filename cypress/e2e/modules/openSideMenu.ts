/**
 * Takes a context and opens the side-menu
 * 
 * The context-parameter e.g. "market" or "contacts" is used to find the correct side-menu-button by tailwind-class (bg-${context})
 */

export const openSideMenu = (context: string) => {
  describe("open side-menu", () => {
    cy.getByClass(
      `flex items-center justify-center w-12 h-12 ml-4 ${context} rounded-full cursor-pointer svelte-v0kil9 text-white`).should("exist")
      .click();;
  });
};
