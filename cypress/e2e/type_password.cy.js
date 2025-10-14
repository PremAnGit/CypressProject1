describe ('KS2-TC02_Type_Passwordfield Check', () => {
   it('On page type assert and enter the password field and enter password',()=> {
    //visit the address
    cy.visit('https://example.cypress.io')

    //find the type element and click on a link
    cy.contains('type').click()

      // Should be on a new url which includes '/commands/actions'
      cy.url().should('include','/commands/actions')

      // Assert the password field with its attribute
      cy.get('.action-focus').focus()
      cy.get('.action-focus').should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')
    
      // Get an input and type into it
      cy.get('.action-focus').type('Password1')
   })

})