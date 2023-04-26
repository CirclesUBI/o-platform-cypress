import { loginFirstPreSeededAccount } from "./testModules/loginPreSeeded";

describe("middle-menu", { testIsolation: false }, () => {
  it("should log in with pre-seeded account", () => {
    loginFirstPreSeededAccount();
  });


  describe("check notifications", () => {
    it("should open the notifications", () => {
      cy.get("svg[name='bell']").should("exist").click();
    });
  });
  // it("should open the middle-menu", () => {
  //   cy.getByClass("navlogo").should("exist").click();
  // });

});