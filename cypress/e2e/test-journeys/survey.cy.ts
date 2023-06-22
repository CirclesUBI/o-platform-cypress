import { signupJourney } from "../modules/signupJourney";

describe("tests for the sign-up journey", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/").then(($url) => { console.log($url) });
  });
  describe("journey", () => {
    it("should pass the signup-journey", () => {
      signupJourney();
    });
  });
});