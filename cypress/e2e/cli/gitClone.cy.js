import { faker} from '@faker-js/faker';
import cypress from 'cypress';

describe("Execute git clone via cliente", ()=>{
    const project ={
        name: `Cypress-JavaScript-AutomatedTest`,
        description: `${faker.random.words(5)}`
    }

    beforeEach(()=>{
       //execute any clearing proccess
    })

    it("Should find a cloned project", ()=>{
        cy.cloneViaSSH(project);

        cy.readFile(`cypress/downloads/${project.name}/README.md`)
            .should('contain', `# ${project.name}`)
            .and('contain', project.description)
    });

});