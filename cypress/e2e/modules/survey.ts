export const survey = () => {

  cy.get("button[class='relative px-8 overflow-hidden transition-all transform btn btn-primary bg-primary text-cpurple text-lg']").should("exist").click();

  // cy.contains("Next").should("exist").click();

  cy.getById("check-1").check();
  cy.getById("check-2").check();
  cy.getById("check-3").check();

  cy.get("button[class='relative px-8 overflow-hidden transition-all transform btn btn-primary bg-primary text-cpurple text-lg']").should("exist").click();

  // cy.contains("Next").should("exist").click();

  cy.getById("check-1").check();
  cy.getById("check-2").check();
  cy.getById("check-3").check();

  cy.get("button[class='relative px-8 overflow-hidden transition-all transform btn btn-primary bg-primary text-cpurple text-lg']").should("exist").click();

  // cy.contains("Next").should("exist").click();

  // Datepicker
  cy.getById("my-picker").click();

  cy.getByClass("numInput cur-year").type("1986");

  cy.getByClass("flatpickr-monthDropdown-months").select("November");

  cy.contains("21").click();


  //

  cy.getByI18nKey("dapps.o-homepage.components.survey.userDataCollection.useCircleAs").parent().find("select").select(1);

  cy.getByI18nKey("dapps.o-homepage.components.survey.userDataCollection.gender"
  ).parent().find("select").select(1);

  // cy.get("select").each(($input) => {
  //   cy.wrap($input).select(1);
  // });

  cy.get("button[class='px-8 overflow-hidden transition-all transform grow btn btn-primary text-lg']").should("exist").click();

  // cy.contains("Scan Invite Now").focus().click();

  cy.get("button[class='relative px-8 overflow-hidden transition-all transform btn btn-primary bg-primary text-cpurple text-lg']").should("exist").click();


  // cy.contains("Next").should("exist").click();

  cy.get("button[class='relative px-8 overflow-hidden transition-all transform btn btn-primary text-lg']").should("exist").click();

  // cy.getByClass("relative px-16 overflow-hidden transition-all transform btn btn-primary").should("exist").click();

}