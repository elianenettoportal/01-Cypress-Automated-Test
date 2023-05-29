describe('Logout', () => {
    // the pre condition is: need to be loged and need to be in the dashboard
    beforeEach(()=>{
        cy.login();
        cy.selecttool();
        cy.visit('/');
    });

    it('Successfully', () => {
      cy.logout();
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/logout`);
    })
  
  })