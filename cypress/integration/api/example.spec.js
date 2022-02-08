/// <reference types="Cypress"/>

describe('Group of test', function () {
  it('API test', function () {
    // see full command at: cypress/support/keywords/api.js
    cy.getTodos()
  })
})
