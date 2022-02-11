/// <reference types="Cypress"/>
const faker = require('faker')
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

// Example import
// import * as Texts from 'constants/objectTexts'

describe('ssssss', function () {
  before(function () {
    cy.log('run me on 1 time at all test start')
  })

  after(function () {
    cy.log('run me on 1 time at all test end')
  })

  beforeEach(function () {
    cy.log('run me always time at it is run')
  })

  afterEach(function () {
    cy.log('run me always time at it is run end')
  })

  context('Sub group of test', function () {
    it('test case 1', function () {
      cy.visit('/')
      cy.log(firstName + lastName)
    })

    it('test case 2', function () {
      cy.visit('/')
    })
  })
})
