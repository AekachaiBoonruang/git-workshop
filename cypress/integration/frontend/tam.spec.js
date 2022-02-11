/// <reference types="Cypress"/>
describe('Google', function () {
  beforeEach(function () {
    cy.visit('https://www.google.co.th')
  })

  it('Search google', function () {
    cy.get("input[name=q]").type('20scoops CNX')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
  })
})
