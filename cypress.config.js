 const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
//import allureWriter from "@shelex/cypress-allure-plugin/writer";


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    "overwrite": true,
    reportFilename:"SauceDemo Report",
    reportPageTitle: 'SauceDemo_Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
       on('file:preprocessor', cucumber())
       require('cypress-mochawesome-reporter/plugin')(on);
    return config;
    },
     specPattern:"**/*.feature"
  },
});

