
describe('Logging In', function () {
  const username = 'xxx'
  const password = 'xxx'

  context('cy.request', () => {
    // profile.w3schools.com

    it('with authorization gets 200', () => {
      cy.request({
        url: '/',
        auth: {
          username, password,
        },
      }).its('status').should('equal', 200)
    })

    // it('without authorization gets 401', () => {
    //   cy.request({
    //     url: '/',
    //     failOnStatusCode: false,
    //   }).its('status').should('equal', 401)
    // })

    it('can post', () => {
      cy.request({
        url: '/',
        method: 'POST',
        auth: {
          username, password,
        },
      }).then((response) => {
        expect(response.status, 'status').to.equal(200)
      })
    })
  })

  context('cy.visit', () => {
    // profile.w3schools.com

    it('loads the page using basic auth', () => {
      cy.visit('/', {
        // auth: {
        //   username, password,
        // },
      })

      // w3schools.com
      cy.get('input[name=email]').type(username)
      cy.get('input[name=current-password]').type(password)
      cy.get('form').submit()
      cy.wait(5000)

      // we should be redirected to /my-learning
      cy.url().should('equal', 'https://my-learning.w3schools.com/')
      cy.get('h2').should('contain', 'Dmitry')
    })

    it('error with wrong auth', () => {
      cy.visit('/', {
        // auth: {
        //   username, password,
        // },
      })

      // w3schools.com
      cy.get('input[name=email]').type('testSomeUser@dsd.com')
      cy.get('input[name=current-password]').type('newSomePassword@dsd.com')
      cy.get('form').submit()
      cy.wait(2000)

      // we should be stay and get alert
      cy.url().should('equal', 'https://profile.w3schools.com/')
      cy.contains('A user with this email does not exist')
    })

  })
})
