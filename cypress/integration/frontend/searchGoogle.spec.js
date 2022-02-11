/// <reference types="Cypress"/>
describe('Google', function () {
  beforeEach(function () {
    cy.visit('http://google.co.th')
  })
  it('Verify search facebook', function () {
    cy.get('[name="q"]').type('Poontarika {ENTER} ')
    cy.contains('Poontarika')
  })
})
