import { loginSecondPreSeededAccount } from "../modules/loginPreSeeded";
import { trustContact } from "../modules/o-contacts/modules/trusting";
import { openDapp } from "../modules/o-dashboard/openDapp";
import { openSideMenu } from "../modules/openSideMenu";

describe("regular circles-user context", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/").then(($url) => { console.log($url) });
  });
  describe("login", () => {
    it("should login with first pre-seeded account", () => {
      loginSecondPreSeededAccount();
    });

  });

  describe("trust another user", () => {
    openDapp("contacts");
    openSideMenu("bg-contacts");

    trustContact();
  });
});