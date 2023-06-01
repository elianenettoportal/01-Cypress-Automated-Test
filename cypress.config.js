const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://xx.herokuapp.com/',
    clientUrl: 'https://xx.com/'
  },
  fixturesFolder: false,
  video: false,
})