
Cypress.Commands.add('login', (
    user = Cypress.env('user_email'),
    password= Cypress.env('user_password')
)=>{
    const login =()=>{
        cy.visit('/');
        cy.get('input[name="email"]').type(user);
        cy.get('input[id="password"]').type(password, {log:false});
        cy.get('[type="submit"]').click();
    }
    
    login();
});

Cypress.Commands.add('selecttool', ()=>{
    cy.get('button[type="button"]').click({ multiple: true });
});

Cypress.Commands.add('logout', ()=>{
    cy.contains('Sign Out').click();
});