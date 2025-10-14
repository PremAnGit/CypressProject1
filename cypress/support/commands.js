Cypress.Commands.add('goToTypeActionPage', ()=> {
 //visit the address
 cy.visit('https://example.cypress.io')
    
 // find an element and click on a link
 cy.contains('type').click()
 
 // Should be on a new url which includes '/commands/actions'
 cy.url().should('include','/commands/actions')
})