
describe('Pre-seeded account', { testIsolation: false }, () => {
  it("clears all cookies, local storage, and session storage", () => {

    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("/#/passport/actions/login/1");
    cy.contains("Login with Apple").should("exist").click();

  })

  it("signs up with preseeded key", () => {


    // cy.on("uncaught:exception", (err, runnable) => {
    //   return false;
    // });

    // cy.get("input").each(($input) => {
    //   cy.wrap($input).type("1");
    // });

    // cy.contains("Login with Apple").should("exist").click();

  })
})