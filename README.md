## Project in Cypress<br>
* Login<br>
* Logout<br>
* Create a new project<br>
* Create a new issue<br>
* Add a label to a issue<br>
* Add a milestone to a issue<br>
* git clone<br>

### My goal
To test all funcionalities above in both sides of the application, Fronte end and API throught GIU-graphic user interface - and test the git clone by CLI

1. Create Repository
   create the package in your local environment
   add git remore repository

   > git remote add origin <link of github created>
   > git branch -M main
   > init a npm project

2. Create the npm Project
   > npm init
   > install Cypress and libs
   > npm i @faker-js/faker@7.6.0 cypress@12.0.2 cypress-plugin-api@2.6.1 -D
   * Faker is a random test creator
   * Cypress plugin ai is used for feedback over API tests

3. Configure cypress run in package.json
   "test": "cypress run"
4. Configure the cypres config file in package json
   "main": "cypress.config.js",
5. Configure Cypress for your test
   > npx cypress open
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
6. Close your cypress browser
7. Configure the project automated test
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
8. Oficial Cypress Documentation
    https://docs.cypress.io/guides/overview/why-cypress
9. Create the Login Page
    In this point let´s create an automated script to login by graphic interface
    Add login and password
    Click signin
    Click sighout
    Verify if success logged

    gui_commands has all customized commands
    This file receives a function that has 2 paramsn, a name and a callback function

install cypress xpath
> npm install -D @cypress/xpath

run specific spec
> npx cypress run --spec cypress/e2e/gui/login.cy.js

Run/Open Cypress Locally
> npx cypress open
