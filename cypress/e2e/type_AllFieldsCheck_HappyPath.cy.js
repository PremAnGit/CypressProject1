describe('KS-TS01_Type Page All Flields Check', () => {
  beforeEach(() => {
    cy.goToTypeActionPage()
  })
  
  it('KS-TC01_Type_Email Field Check if we can enter email in the email field ', () => {
    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    // verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })

  it('KS-TC02_Type_FullName Check if we can enter the full name on the field',() => {
// Clear the full name field
cy.get('.action-blur').clear();
cy.get('.action-blur').type('Full Name')
  })

it('KS-TC03_Type Password in the password field', () => {
// Type the Password in the password field
cy.get('.action-focus').type('Password1')

})
})