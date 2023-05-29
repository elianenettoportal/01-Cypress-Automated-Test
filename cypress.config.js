const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://XXXX-web-internal.herokuapp.com/',
  },
  fixturesFolder: false,
  video: false,
})