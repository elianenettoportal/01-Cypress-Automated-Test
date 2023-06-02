import { faker } from '@faker-js/faker';

describe("API- Should create a User and join a project", ()=>{
    // clear database before start tests
    beforeEach(() => cy.api_deletePrograms());

    it("Should create a Program via API", ()=>{
        const program ={
            name:`Cypress Program - ${faker.random.words(2)}`,
            description:faker.random.words(5),
            partnershipType: Cypress.env('program_type'),  
            programPhase: Cypress.env('program_phase')
        }
        cy.api_createProgram(program)
            .then(response =>{
                expect(response.body.message).to.equal(Cypress.env('response_message'));
            });
    });
});
