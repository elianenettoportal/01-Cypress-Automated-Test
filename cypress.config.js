const { defineConfig } = require('cypress')
const env = require('./cypress.env.json');

module.exports = defineConfig({
  e2e: {
    baseUrl: `${env.frontend_url}`,
    backendBaseUrl: `${env.backend_url}`,
    clientUrl: `${env.client_url}`,
    gitUrl:"github.com",
    env:{
      hideCredentials: true,
      requestMode:true
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})