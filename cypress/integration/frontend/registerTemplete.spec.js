/// <reference types="Cypress"/>
describe('Register test case', function () {
  beforeEach(function () {
    cy.visit('http://testphp.vulnweb.com/login.php')
  })

  xit('Register successfully case', function () {
    const genderList = ['#downshift-3-item-0', '#downshift-3-item-1']
    const randomGender =
      genderList[Math.floor(Math.random() * genderList.length)]
    cy.visitRegisterPage()
    cy.enterRegisterData({
      email: 'automate-tester@gmail.com',
      password: '20Scoops',
      firstName: 'S,oftware',
      lastName: 'Tester',
      companyName: '20Scoops#',
      gender: randomGender,
    })
    cy.verifyAfterRegistered()
  })
})
