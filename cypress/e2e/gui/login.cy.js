describe('Login', () => {

  it('Successfully', () => {
    const user     = Cypress.env('user_name');
    const password = Cypress.env('user_password');
    // when testing login we want to use params and not cache session
    const options  = { cacheSession: false };

    // ACTION
    cy.login(user, password, options);

    // Results after action Expected to be ..
    cy.xpath('//*[@id="root"]/div/div').should('be.visible');
  });
  
});