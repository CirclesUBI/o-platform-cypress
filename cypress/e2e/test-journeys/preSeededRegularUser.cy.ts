import { loginFirstPreSeededAccount, loginSecondPreSeededAccount } from "../modules/loginPreSeeded";
import { bankingTests } from "../modules/o-banking/bankingTests";
import { contactsTests } from "../modules/o-contacts/contactsTests";
import { marketTests } from "../modules/o-marketlisting/marketTests";
import { profileSettings } from "../modules/o-passport/profileSettings";

// let checkIfElementExists = (className: string) => {
//   let locationAlreadySet = document.getElementsByClassName(className)
//   console.log(locationAlreadySet)

//   if (locationAlreadySet.length > 0) {
//     return true
//   } else {
//     return false
//   }
// }

describe("regular circles-user context", { testIsolation: false }, () => {
  it("clears all cookies, sessionStorage and localStorage", () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/");
  });
  describe("login", () => {
    it("should login with first pre-seeded account", () => {
      loginSecondPreSeededAccount();
    });

  });

  profileSettings();

  bankingTests();

  marketTests();

  contactsTests();
});