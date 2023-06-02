const accessToken = `Bearer ${Cypress.env('tool_access_token')}`;

Cypress.Commands.add("api_createUserAndJoinProject", userData=>{
    cy.request({
        method: 'POST',
        url: `${Cypress.config('backendBaseUrl')}${Cypress.env('create_join_url')}`,
        body:{userData},
        headers: {Authorization: accessToken},
    });
});

Cypress.Commands.add("api_getAllPrograms",()=>{
    cy.request({
        method: 'GET',
        url:`${Cypress.config('backendBaseUrl')}programs`,
        headers:{Authorization: accessToken}
    })

});

Cypress.Commands.add("api_getAllUsers",()=>{
    cy.request({
        method: 'GET',
        url:`${Cypress.config('backendBaseUrl')}users`,
        headers:{Authorization: accessToken}
    })

});

Cypress.Commands.add("api_deletePrograms",()=>{
    cy.api_getAllPrograms().then(res =>
        res.body.forEach(project => cy.request({
            method: 'DELETE',
            url:`${Cypress.config('backendBaseUrl')}/delete/${project.id}`,
            headers:{Authorization: accessToken}
        }))
    )
});

Cypress.Commands.add("api_deleteUsers",()=>{
    cy.api_getAllUsers().then(res =>
        res.body.forEach(user => cy.request({
            method: 'DELETE',
            url:`${Cypress.config('backendBaseUrl')}/delete/${user.id}`,
            headers:{Authorization: accessToken}
        }))
    )
});
