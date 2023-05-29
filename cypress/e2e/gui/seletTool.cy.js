describe('Tool Admin', () => {
    // the pre condition is: need to be loged and need to be in the dashboard
    beforeEach(()=>{
      cy.login();
      cy.visit('/');
    });

    it('Successfully', () => {
      cy.selecttool();
  
      cy.contains('Welcome back');
    })
  
  })