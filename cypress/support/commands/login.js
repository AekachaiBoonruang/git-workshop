Cypress.Commands.add('visitLoginPage', () => {
  cy.get('a').contains('Signup').eq(0).click()
})

Cypress.Commands.add('enterLoginData', (email, password) => {
  cy.get('[name="uname"]').clear().type(email)
  cy.get('[name="pass"]').clear().type(password)
  cy.get('[type="submit"][value="login"]').click()
})

Cypress.Commands.add('verifyAfterLogin', () => {
  cy.contains('On this page you can visualize or edit you user information.')
  cy.get('a').contains('Logout test').click()
  cy.contains('You have been logged out. See you back soon.')
})

Cypress.Commands.add('verifyEorrorAfterLogin', (message) => {
  cy.contains(message)
})
