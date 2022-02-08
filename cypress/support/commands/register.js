Cypress.Commands.add('visitRegisterPage', () => {
  cy.get('a').contains('Register').eq(0).click()
})

Cypress.Commands.add(
  'enterRegisterData',
  ({email, password, firstName, lastName, CompanyName, gender}) => {
    cy.get('[name="email"]').clear().type(email)
    cy.get('[name="password"]').clear().type(password)
    cy.get('[name="firstName"]').clear().type(firstName)
    cy.get('[name="lastName"]').clear().type(lastName)
    cy.get('[name="CompanyName"]').clear().type(CompanyName)
    cy.get(gender).click()
    cy.get('[type="submit"][value="login"]').click()
  },
)

Cypress.Commands.add('verifyAfterRegistered', () => {
  cy.contains('On this page you can visualize or edit you user information.')
})

Cypress.Commands.add('verifyEorrorAfterRegister', (message) => {
  cy.contains(message)
})
