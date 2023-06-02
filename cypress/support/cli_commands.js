// Test Select tool
Cypress.Commands.add('cloneViaSSH', (project)=>{
    const domain = Cypress.config('gitUrl');

    //go into downloads package in the project -> git@github.com:<username>/Cypress-JavaScript-AutomatedTest.git
    cy.exec(`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('my_gituser')}/${project.name}.git`);
});