describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')


    cy.getByI18nKey("shared.molecules.nextNav.components.loginPill.signInNow").should("exist").click()

    cy.contains("Login with Apple").should("exist").click()

    cy.get("input").each(($input) => {
      cy.wrap($input).type("1")
    })   
    
    cy.get("button[type=submit]").should("exist").click()

    cy.contains("Next").should("exist").click()

    cy.getById("check-1").check()
    cy.getById("check-2").check()
    cy.getById("check-3").check()

    cy.contains("Next").should("exist").click()

    cy.getById("check-1").check()
    cy.getById("check-2").check()
    cy.getById("check-3").check()

    cy.contains("Next").should("exist").click()

    cy.get("select").each(($el) => {
      cy.wrap($el).select(1)
    })

    cy.get("[type='text']").type("11-11-1987")

    cy.contains("Scan Invite Now").focus().click()
  })
})
