Cypress.Commands.add('getTodos', () => {
  cy.api({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
    // If method equal POST, PUT
    // method: 'POST',
    // body: {
    //   email: email,
    //   password: password,
    // },
    // If code response not equal 200
    failOnStatusCode: false,
  })
})

// Exmaple to get token.
Cypress.Commands.add(
  'loginApi',
  ({email, password, statusCode, key, message}) => {
    cy.request({
      method: 'POST',
      url: '',
      body: {
        email: email,
        password: password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      if (statusCode === 200) {
        expect(response.body).to.have.property('token')
        Cypress.env('tokenAdmin', response.body.token)
        window.localStorage.setItem('token', `"${response.body.token}"`)
      } else {
        expect(response.status).to.eq(statusCode)
        expect(response.body).to.have.property(key, message)
      }
    })
  },
)
