/// <reference types="Cypress"/>
import * as loginElement from '../../support/pageObject/login'
describe('Login test case', function () {
  beforeEach(function () {
    cy.visit('http://testphp.vulnweb.com/login.php')
    cy.fixture('login.json').then(function (info) {
      this.contentLoginPage = info.loginContent
    })
  })

  it('Login with valid email and password', function () {
    this.contentLoginPage.forEach((element) => {
      cy.contains(element)
    })
    cy.visitLoginPage()
    cy.enterLoginData('test', 'test')
    cy.verifyAfterLogin()
  })

  it('Login with invalid email or password', function () {
    cy.visitLoginPage()
    cy.enterLoginData('test', 'test1')
    cy.verifyEorrorAfterLogin(
      'Signup disabled. Please use the username test and the password test.',
    )
  })

  it('Login with invalid email or password in pageObject case', () => {
    cy.visitLoginPage()
    loginElement.emailInput().type('test')
    loginElement.passowordInput().type('test1')
    loginElement.submitLoginButton().click()
  })
})
