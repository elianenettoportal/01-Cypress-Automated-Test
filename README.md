## Project in Cypress<br>

- Login<br>
- Logout<br>
- Create a new project<br>
- Create a new user using API<br>
- git clone<br>

### My goal

To test all functionalities above in both sides of the application, Front end and API through GIU-graphic user interface - and test the git clone by CLI

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

   - Faker is a random test creator
   - Cypress plugin ai is used for feedback over API tests

3. Configure cypress run in package.json
   "test": "cypress run"
   
4. Configure the cypres config file in package json
   "main": "cypress.config.js",
   
5. Configure Cypress for your test
   > npx cypress open<br>
   > When your local cypress is opened<br>
   > a) Continue<br>
   > b) If in windows, allow it to cross the firewal<br>
   > c) E2E End to End Testing<br>
   > d) Cypress added files, just click Continue<br>
   > e) Select your browser - Chrome v113<br>
   > f) Click Start<br>
   > e) The local cypress application has been configured<br>
   > f) Create your first spec- Select Create new empty spec<br>
   > g) Rename the first spec to login cypress\e2e\login.cy.js<br>
   > h) Click Okay, run the spec<br>
   > i) After the test run see that it passed. If passed you can close, configuration is done<br>
   <br>
   
6. Close your cypress browser

7. Oficial Cypress Documentation
   https://docs.cypress.io/guides/overview/why-cypress


install cypress xpath in dev mode

> npm install -D cypress-xpath

run specific spec

> npx cypress run --browser chrome --spec cypress/e2e/gui/login.cy.js
> npx cypress run --browser chrome --spec cypress/e2e/gui/createProject.cy.js
> npx cypress run --spec cypress/e2e/cli/gitClone.cy.js

open Cypress app locally in interactive mode

Run/Open Cypress Locally

> npx cypress open

## Visual Feedback for API tests

This visual feedback makes it easy to test API. Makes sensitive information hidden, for instance, an access token.

## Visual Feedback for GUI with API

The lib cypress-plugin-api makes possible API tests with GUI tests.

## How to execute the command line at the system level

https://docs.cypress.io/api/commands/exec
Use the functionality cy.exec() to execute the command line. For instance a git clone via SSH

## How to execute all tests at once

We can execute all tests in headless mode with an npm script
Add a run script in package.json

> npm test

## Execute iterative tests

We can execute all tests in an iterative mode also using an npm script in package.json to open Cypress App

"scripts": {
"cy:open": "cypress open",
"test": "cypress run"
},

## New Functionality

Cypress re-launched (experimental) https://docs.cypress.io/guides/references/changelog#11-2-0
Configurando o Cypress para rodar todos os testes em modo interativo
It opens the browser only once to execute all tests.
