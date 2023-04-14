import { defineConfig } from "cypress";

const videoInput = __dirname + "/cypress/fixtures/Person_1.y4m";

export default defineConfig({
  hosts: {
    "*.localhost": "127.0.0.1",
  },
  e2e: {
    baseUrl: "https://o-platform.circlesubi.localhost",
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
