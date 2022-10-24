describe('Querying for DOM elements on the page', function () {
  context('Querying', () => {
    beforeEach(() => {
        cy.visit('/commands/querying', { })
      })
    
    it('cy.get() - query DOM elements', () => {
      cy.get('#query-btn').should('contain', 'Button')
      cy.get('.query-btn').should('contain', 'Button')
      cy.get('#querying .well>button').first().should('contain', 'Button')
      cy.log('test: query - button')
      
      cy.get('[data-test-id="test-example"]').should('have.class', 'example').and('contain', 'Div with')
      cy.log('test: query - div')
      
      cy.get('[data-test-id="test-example"]')
      .invoke('attr', 'data-test-id')
      .should('equal', 'test-example')

      cy.get('[data-test-id="test-example"]')
      .should('have.attr', 'data-test-id', 'test-example')
      .and('have.css', 'position', 'static')

    })
    it('cy.contains() - query DOM elements with matching content', () => {
      cy.get('.query-list')
      .contains('bananas')
      .should('have.class', 'third')
      
      cy.get('.query-list')
      .contains(/^b\w+/)
      .should('have.class', 'third')

      cy.get('.query-list')
        .contains('apples')
        .should('have.class', 'first')

      cy.get('#querying')
        .contains('ul', 'oranges')
        .should('have.class', 'query-list')

      cy.get('.query-button')
        .contains('Save Form')
        .should('have.class', 'btn')
      })

    it('cy.contains() - query DOM elements with matching content', () => {
      cy.get('.query-form').within(() => {
        cy.get('input:first').should('have.attr', 'placeholder', 'Email')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password')
      })
    })

    it('cy.root() - query the root DOM element', () => {
      cy.root().should('match', 'html')    
      cy.get('.query-ul').within(() => {
        cy.root().should('have.class', 'query-ul')
      })
    })
  })
})