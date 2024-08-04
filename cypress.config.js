const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
<<<<<<< HEAD
    baseUrl: 'http://localhost:4200/',
=======
    baseUrl: 'http://localhost:4200',
>>>>>>> 0bb1bb90b0af9a8876b95d0ae815683c7e4626eb
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
