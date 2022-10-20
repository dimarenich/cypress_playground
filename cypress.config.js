module.exports = {
  projectId: 'NSCypressStudy20221020',
  viewportHeight: 1000,
  viewportWidth: 1280,
  downloadsFolder: "cypress/downloads",
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io',
    supportFile: false,
  },
};
