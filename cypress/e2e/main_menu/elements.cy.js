describe('Main menu', function () {
  context('cy.visit', () => {
    // https://example.cypress.io

    before(() => {
      cy.visit('/', { })
    })

    it('main menu contains all items', () => {
      // Check persistent list of menus and links
      cy.get('.navbar-header .navbar-brand').contains('cypress.io').should('have.attr', 'href', '/')
      cy.get('[id="navbar"] ul li .dropdown-toggle').contains('Commands').should('have.attr', 'href', '#')
      cy.get('[id="navbar"] ul li a').contains('Utilities').should('have.attr', 'href', '/utilities')
      cy.get('[id="navbar"] ul li a').contains('Cypress API').should('have.attr', 'href', '/cypress-api')
      cy.get('[id="navbar"] ul li a').contains('GitHub').should('have.attr', 'href', 'https://github.com/cypress-io/cypress-example-kitchensink')
      cy.log('test: main menu contains all items')
    })
    it('drop-down list "Commands" contains all sub-items', () => {
      cy.get('[id="navbar"] ul li .dropdown-toggle .caret').click()
      cy.get('[id="navbar"] ul li ul li').should('have.length', 17)
      cy.get('[id="navbar"] ul li ul li a').contains('Querying').should('have.attr', 'href', '/commands/querying')
      cy.get('[id="navbar"] ul li ul li a').contains('Traversal').should('have.attr', 'href', '/commands/traversal')
      cy.get('[id="navbar"] ul li ul li a').contains('Actions').should('have.attr', 'href', '/commands/actions')
      cy.get('[id="navbar"] ul li ul li a').contains('Window').should('have.attr', 'href', '/commands/window')
      cy.get('[id="navbar"] ul li ul li a').contains('Querying').should('have.attr', 'href', '/commands/querying')
      cy.get('[id="navbar"] ul li ul li a').contains('Viewport').should('have.attr', 'href', '/commands/viewport')
      cy.get('[id="navbar"] ul li ul li a').contains('Location').should('have.attr', 'href', '/commands/location')
      cy.get('[id="navbar"] ul li ul li a').contains('Navigation').should('have.attr', 'href', '/commands/navigation')
      cy.get('[id="navbar"] ul li ul li a').contains('Assertions').should('have.attr', 'href', '/commands/assertions')
      cy.get('[id="navbar"] ul li ul li a').contains('Misc').should('have.attr', 'href', '/commands/misc')
      cy.get('[id="navbar"] ul li ul li a').contains('Connectors').should('have.attr', 'href', '/commands/connectors')
      cy.get('[id="navbar"] ul li ul li a').contains('Aliasing').should('have.attr', 'href', '/commands/aliasing')
      cy.get('[id="navbar"] ul li ul li a').contains('Waiting').should('have.attr', 'href', '/commands/waiting')
      cy.get('[id="navbar"] ul li ul li a').contains('Network Requests').should('have.attr', 'href', '/commands/network-requests')
      cy.get('[id="navbar"] ul li ul li a').contains('Files').should('have.attr', 'href', '/commands/files')
      cy.get('[id="navbar"] ul li ul li a').contains('Local Storage').should('have.attr', 'href', '/commands/local-storage')
      cy.get('[id="navbar"] ul li ul li a').contains('Cookies').should('have.attr', 'href', '/commands/cookies')
      cy.get('[id="navbar"] ul li ul li a').contains('Spies, Stubs & Clocks').should('have.attr', 'href', '/commands/spies-stubs-clocks')
      cy.get('[id="navbar"] ul li .dropdown-toggle').click()
      cy.log('test: drop-down list "Commands" contains all sub-items')
    })

  })
})
