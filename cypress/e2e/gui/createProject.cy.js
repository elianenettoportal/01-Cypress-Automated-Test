import {faker} from '@faker-js/faker';

describe('Create Project ', ()=>{
   // Pre condiction 
    beforeEach(()=>{
        cy.login();
        cy.gui_selecttool_admin();
    });

    it('successfully ', ()=>{
        const program = {
            name:`Cypress Program - ${faker.random.words(2)}`,
            description:faker.random.words(5),
            partnershipType: Cypress.env('program_type'),  
            programPhase: Cypress.env('program_phase')
        }

        // ACTION
        cy.gui_createProject(program);

        // Results after action Expected to be ..
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('param_create')}`);
    });
    
});