import { loginFirstPreSeededAccount, loginSecondPreSeededAccount } from "./testModules/loginPreSeeded";

const contactTrustingYou = false;


describe("tests for contact-list", { testIsolation: false }, () => {

  describe("trusting as Person_10", { testIsolation: false }, () => {
    it("should login with first pre-seeded account", () => {
      loginFirstPreSeededAccount();
    });

    if (contactTrustingYou) {
      describe("should untrust Person_9", { testIsolation: false }, () => {

        it("should open the contacts-dapp", () => {
          cy.getByI18nKey("dapps.o-dashboard.pages.home.contacts")
            .should("exist")
            .click();
        });

        it("should open contact-detail", () => {
          cy.contains("Person_9").should("exist").click();
        })

        it("should untrust someone", () => {
          cy.contains("Untrust").should("exist").click();

          cy.getByI18nKey("Trust successful").should("exist");

          cy.get("button[type=submit]").should("exist").click();

        });
      });
    } else {

      describe("should trust Person_9 through middle-menu", { testIsolation: false }, () => {

        it("should open the middle-menu", () => {
          cy.getByClass("navlogo").should("exist").click();
        });

        it("should open trust-dropdown", () => {
          cy.contains("Trust new Friend").should("exist").click();
        });

        it("should trust-contact", { retries: 3 }, () => {
          cy.get("input").clear().type("Person_9");

          cy.wait(1000);

          cy.getByClass("listItem").find("div").contains("Person_9").should("exist").click();
          // cy.contains("Person_9").should("exist").click();

          cy.get("button[type=submit]").should("exist").click();
          cy.get("button[type=submit]").should("exist").click();

        });
      });
    }
  });

  describe("trusting as Person_9", { testIsolation: false }, () => {
    it("should login with second pre-seeded account", () => {
      loginSecondPreSeededAccount();
    });

    describe("should trust Person_10 through middle-menu", { testIsolation: false }, () => {

      it("should open the middle-menu", () => {
        cy.getByClass("navlogo").should("exist").click();
      });

      it("should open trust-dropdown", () => {
        cy.contains("Trust new Friend").should("exist").click();
      });

      it("should trust-contact", { retries: 3 }, () => {
        cy.get("input").clear().type("Person_10");

        cy.contains("Person_10").should("exist").click();

        cy.get("button[type=submit]").should("exist").click();
        cy.get("button[type=submit]").should("exist").click();

      });
    });
  });
});

