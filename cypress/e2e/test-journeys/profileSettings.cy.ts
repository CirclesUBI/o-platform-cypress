import { loginSecondPreSeededAccount } from "../modules/loginPreSeeded";
import { profileSettings } from "../modules/o-passport/profileSettings";

describe("tests for changing the profile-settings", { testIsolation: false }, () => {

  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");
  });

  it("should login with pre-seeded account", () => {
    loginSecondPreSeededAccount();
  });

  profileSettings();
});