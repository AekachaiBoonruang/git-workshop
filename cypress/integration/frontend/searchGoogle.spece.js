/// <reference types="Cypress"/>
describe('Google', function () {
    beforeEach(function () {
      cy.visit('http://google.co.th')
    })
  it('Verify search facebook', function () {
    cy.get('[class="gLFyf gsfi"]').type('Poontarika {ENTER} ')
    cy.contains('Poontarika')
  })
})