describe('Logout', () => {

    // Pre Condition is: need to be logged and need to be in the dashboard
    beforeEach(()=>{
        cy.login();
        cy.gui_selecttool_admin();
    });

    it('Successfully', () => {

      // ACTION
      cy.gui_logout();

      // Results after action Expected to be ..
      cy.url().should('be.equal', `${Cypress.config('clientUrl')}`);
    });
    
  });