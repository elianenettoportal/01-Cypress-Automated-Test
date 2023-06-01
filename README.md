Cypress Javascript
Login
Logout
Create a new project
create a new issue
add a label to a issue
add a milestone to a issue
git clone

My goal
Test all funcionalities bove in both sides Fronte end and API via GIU graphic user interface and test the git clone by CLI

1. Install the API to be used to test. it is a gitlab image Docker
   docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce

2. Configure a GitLab root user and password
   root
   admin
3. Create an acess token
   Login
   Copy access toen

4. Create Repository
   create the package in your local environment
   add git remore repository

   > git remote add origin <link of github created>
   > git branch -M main
   > init a npm project
   > npm init
   > install Cypress and libs
   > npm i @faker-js/faker@7.6.0 cypress@12.0.2 cypress-plugin-api@2.6.1 -D
   > Faker is a random test creator
   > Cypress plugin ai is used for feedback over API tests

5. Configure cypress run in package.json
   "test": "cypress run"
6. Configure the cypres config file in package json
   "main": "cypress.config.js",
7. Configure Cypress for your test
   run: npx cypress open
   When your local cypress is opened
   a) Continue
   b) If in windows, allow it to cross the firewal
   c) E2E End to End Testing
   d) Cypress added files, just click Continue
   e) Select your browser - Chrome v113
   f) Click Start
   e) The local cypress application has been configured
   f) Create your first spec- Select Create new empty spec
   g) Rename the first spec to login cypress\e2e\login.cy.js
   h) Click Okay, run the spec
   i) After the test run see that it passed. If passed you can close, configuration is done
8. Close your cypress browser
9. Configure the project automated test
   a) Open the file cypress.confg.js that was automaticaly created
   this file import the defineConfig function that we export this function a object argument.
   b) In the object argument
   Configure the URL base
   Configure the no fixtures, you can delete this folder from root file to not have it recreated
   Also, add No videos so then we do not generate videos of this tests. This is because recording slower the process
   d) Create a file with environment values. These are sensitive information not versionated
   In cypress the env file is cypress.env.json. Create this file and add 3 env variables, these are the GitLab credentials
   root = admin
   password = 1q2w3eGitlab
   gitlab_access_token =
10. Oficial Cypress Documentation
    https://docs.cypress.io/guides/overview/why-cypress
11. Create the Login Page
    In this point let´s create an automated script to login by graphic interface
    Add login and password
    Click signin
    Click sighout
    Verify if success logged

    gui_commands has all customized commands
    This file receives a function that has 2 paramsn, a name and a callback function

install cypress xpath in dev mode

> npm install -D cypress-xpath

run specific spec

> npx cypress run --spec cypress/e2e/gui/login.cy.js
> npx cypress run --spec --browser chrome cypress/e2e/gui/login.cy.js
> npx cypress run --spec cypress/e2e/gui/createProject.cy.js

open cypress app locally in interative mode

> npx cypress open
