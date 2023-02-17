const { defineConfig } = require("cypress");

module.exports = defineConfig({
  hosts: {
    "*.localhost": "127.0.0.1"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

