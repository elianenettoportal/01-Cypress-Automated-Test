import { faker } from '@faker-js/faker';

describe("API- Should create a project", ()=>{
    // clear database before start tests
    beforeEach(() => cy.api_deleteUsers());

    it("Should create a User via API", ()=>{
        const userData = {
                firstName : `${faker.random.words(1)}`,
                lastName  : `${faker.random.words(2)}`,
                email     : `${faker.random.words(2)}@gmail.com`,
                phone     : `${faker.random.numeric(5)}`,
                city      : `${faker.random.words(2)}`,
                state     : `${faker.random.words(1)}`,
                country   : `${faker.random.words(1)}`,
                programId : Cypress.env('program_id'),
                topic     :[{
                                module:  Cypress.env('module_id'),
                                rak: true
                            }],
                role      : Cypress.env('program_role')
        }

        cy.api_createUserAndJoinProject(userData)
            .then(response =>{
                expect(response.body.message).to.equal(Cypress.env('response_message'));
            });
    });
});