export const testNotification = () => {


  describe("check notifications", () => {
    it("should open the notifications", () => {
      cy.get("svg[name='bell']").should("exist").click();
    });

    // it("should open side-menu", () => {
    //   cy.getByClass("flex items-center justify-center w-12 h-12 ml-4 bg-notifications rounded-full cursor-pointer svelte-v0kil9 text-white").should("exist").click();
    // });

    // it("should filter for Trust-events", () => {
    //   cy.contains("Trust events").should("exist").click();
    // });

    it("should not show 'Loading...' message", () => {
      cy.contains("Loading...").should("not.exist");
    });
  });
}