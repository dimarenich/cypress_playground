describe('Main menu', function () {
  const username = 'xxx'
  const password = 'xxx'

  context('cy.visit', () => {
    // https://my-learning.w3schools.com/

    beforeEach(() => {
      cy.visit('/', {
        // auth: {
        //   username, password,
        // },
      })
      cy.get('input[name=email]').type(username)
      cy.get('input[name=current-password]').type(password)
      cy.get('form').submit()
      cy.wait(5000)
      cy.log('success login')
    })

    it('main menu contains all elements', () => {
      // Check persistent list of menus and links
      cy.get('nav').contains('My learning').should('have.attr', 'href', 'https://my-learning.w3schools.com')
      cy.get('nav').contains('Paid courses').should('have.attr', 'href', 'https://campus.w3schools.com/')
      cy.get('nav').contains('Certificates').should('have.attr', 'href', 'https://my-learning.w3schools.com/certificates')
      cy.get('nav').contains('Videos').should('have.attr', 'href', 'https://www.w3schools.com/videos/index.php')
      cy.get('nav').contains('Spaces').should('have.attr', 'href', 'https://spaces.w3schools.com')
      cy.get('nav').contains('Settings').should('have.attr', 'href', 'https://profile.w3schools.com/settings')
      cy.get('nav').contains('Billing').should('have.attr', 'href', 'https://billing.w3schools.com')
      cy.get('nav').contains('Blog').should('have.attr', 'href', 'https://campus.w3schools.com/blogs/blog')
      cy.get('nav').contains('Community').should('have.attr', 'href', 'https://discord.gg/6Z7UaRbUQM')
      cy.get('nav').contains('Log out')
      cy.log('main menu contains all elements')
    })

  })
})
