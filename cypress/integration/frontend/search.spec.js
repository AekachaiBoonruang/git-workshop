/// <reference types="Cypress"/>
describe('Google search.', function () {
  beforeEach(function () {
    cy.visit('https://www.google.com/')
  })

  it('Verify search google by name', function () {
    cy.get('[name="q"]').type('เอกชัย บุญเรือง {ENTER}')
    cy.contains('เอกชัย บุญเรือง | Facebook')
  })
})
