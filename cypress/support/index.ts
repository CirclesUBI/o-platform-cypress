/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByI18nKey(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>,
    getById(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    getByClass(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}