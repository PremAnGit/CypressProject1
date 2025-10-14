describe('KS2-TC03_FullName Check', ()=> {
it ('on page type blur and enter the Full name', ()=> {
//Visit the address
cy.visit('https://example.cypress.io')

//find the element called type and click on link 
cy.contains('type').click()

// should be on the new commands/actions
cy.url().should('include', '/commands/actions')

// Assert the FullName field and blur the field with Red
cy.get('.action-blur').type('About to blur')
cy.get ('.action-blur').blur()
cy.get('.action-blur').should('have.class', 'error')
.prev().should('have.attr', 'style', 'color: red;')

//Enter a sample full name on the text
cy.get('.action-blur').clear();
cy.get('.action-blur').type('Full Name')

})
})