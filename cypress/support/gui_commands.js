require('cypress-xpath');


/** If login test isn´t the focus we can get the user from the session browser. 
 *  Ony when testing login we use the grafic interface. 
 * The params are not mandatory, if nothing is sent get the user and the password in the env file.
 * */


// login(name?, password?)
Cypress.Commands.add('login', (
    user      = Cypress.env('user_email'), 
    password  = Cypress.env('user_password'),
    { cacheSession = true }= {} // object session that define if login will use cache session or not
)=>{
    const login =()=>{
        cy.visit('/');
        cy.get('input[name="email"]').type(user);
        cy.get('input[id="password"]').type(password, {log:false});
        cy.get('[type="submit"]').click();
    }
    
    /** Validate function will help when executing many times the same test.
     * When first time executing the test it asks to run login command, 
     * Otherwuise skip it and just test what it is asked to 
     * */
    const validate = ()=>{
        cy.visit('/');
        cy.contains('Sign In');
    }
    const options ={
        cacheSession: true,
        validate
    }
    if(cacheSession){
        cy.session(user, login, options);
    }else {
        login();
    } 
});

// Test Select tool
Cypress.Commands.add('gui_selecttool_admin', ()=>{
    cy.xpath('//*[@id="root"]/div/div/div[1]/div/div[2]/button').click();
});

// Test logout()
Cypress.Commands.add('gui_logout', ()=>{
    cy.contains('Sign Out').click();
});

// Test Create a Project 
Cypress.Commands.add('gui_createProject', program =>{
    
    cy.visit('/create-program');

    cy.get('input[name="title"]').type(program.name); // get element by name equals title and type in the project name
    cy.get('div[id="matchCreators"]').click(); // find dropdown by its id
    cy.contains(program.partnershipType).click(); // when dropdown selected find the option admin
    cy.contains(program.programPhase).click(); // Click on first el containing 'phase'
    cy.xpath('//*[@id="simple-tabpanel-0"]/div/div/header/div/div[4]/button').click(); 

    cy.wait(1000)
});
