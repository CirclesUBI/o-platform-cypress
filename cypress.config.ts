import { defineConfig } from 'cypress'

console.log("hello from config");

export default defineConfig({
  hosts: {
    "*.localhost": "127.0.0.1"
  },
  e2e: {
    // supportFile: "support/initVideo.ts",
    baseUrl: "https://o-platform.circlesubi.localhost",
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser:any = {}, launchOptions) => {
        console.log("before:browser:launch - browser.family", browser.family)
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // Mac/Linux
          launchOptions.args.push(
              '--use-fake-device-for-media-stream --use-file-for-fake-video-capture=/o-platform-cypress/cypress/fixtures/Person_1.y4m'
          )
        }

        return launchOptions
      })
    }
  },
})
