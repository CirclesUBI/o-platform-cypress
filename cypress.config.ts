import { defineConfig } from "cypress";

const videoInput = __dirname + "/cypress/fixtures/Person_1.y4m";

export default defineConfig({
  env: {
    keyPhrase: "forward cover photo zoo panther decrease click raise unknown meadow fold struggle know increase misery bird rifle phrase sick fashion fresh repeat someone wish",
  },
  hosts: {
    "*.localhost": "127.0.0.1",
  },
  e2e: {
    baseUrl: "https://o-platform.circlesubi.localhost",
    specPattern: ["cypress/e2e/**/*.cy.ts"],
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser: any = {}, launchOptions) => {
        console.log("before:browser:launch", browser, launchOptions);
        if (browser.family === "chromium" && browser.name !== "electron") {
          // auto open devtools
          launchOptions.args.push("--auto-open-devtools-for-tabs");
          launchOptions.args.push(
            `--use-file-for-fake-video-capture=${videoInput}`
          );
        }

        return launchOptions;
      });
    },
  },
});
