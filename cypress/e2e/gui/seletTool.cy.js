describe('Tool Admin', () => {
    // Pre condition is: need to be loged and need to be in the dashboard
    beforeEach(()=>{
      cy.login();
      cy.visit('/');
    });

    it('Successfully', () => {
      // ACTION
      cy.gui_selecttool_admin();
  
      // Results after action Expected to be ..
      cy.contains('Welcome back');
    });
    
  });