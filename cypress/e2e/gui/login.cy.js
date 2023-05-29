describe('Login', () => {

  it('Successfully', () => {
    cy.login();

    cy.get('div[id="root"]').should('be.visible');
  })

})