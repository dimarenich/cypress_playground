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
      const dropdown_sub_items = {
        'Querying': '/commands/querying',
        'Traversal': '/commands/traversal',
        'Actions': '/commands/actions',
        'Window': '/commands/window',
        'Viewport': '/commands/viewport',
        'Location': '/commands/location',
        'Navigation': '/commands/navigation',
        'Assertions': '/commands/assertions',
        'Misc': '/commands/misc',
        'Connectors': '/commands/connectors',
        'Aliasing': '/commands/aliasing',
        'Waiting': '/commands/waiting',
        'Network Requests': '/commands/network-requests',
        'Files': '/commands/files',
        'Local Storage': '/commands/local-storage',
        'Cookies': '/commands/cookies',
        'Spies, Stubs & Clocks': '/commands/spies-stubs-clocks'
      };
      let dropdown_list = '[id="navbar"] ul li ul li'
      let dropdown_menu = '[id="navbar"] ul li ul li a'
      let dropdown_caret ='[id="navbar"] ul li .dropdown-toggle .caret'
      cy.get(dropdown_caret).click()
      cy.get(dropdown_list).should('have.length', 17)
      cy.get(dropdown_menu).within(($dropdown_menu) => {
        const keys = Object.keys(dropdown_sub_items);
        keys.forEach((key, index) => {
          cy.contains(`${key}`).should('have.attr', 'href', `${dropdown_sub_items[key]}`)
        });
      })
      cy.get(dropdown_menu).first().should('have.text', 'Querying')
      cy.get(dropdown_menu).last().should('have.text', 'Spies, Stubs & Clocks')
      cy.get('[id="navbar"] ul li .dropdown-toggle').click()
      cy.log('test: drop-down list "Commands" contains all sub-items')
    })
  })
})
