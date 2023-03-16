import { defineConfig } from 'cypress'

export default defineConfig({
  hosts: {
    "*.localhost": "127.0.0.1"
  },
  e2e: {
    baseUrl: "https://o-platform.circlesubi.localhost",
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser:any = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push(
              '--use-file-for-fake-video-capture=/o-platform-cypress/cypress/fixtures/Person_1.y4m'
          )
        }

        return launchOptions
      })
    }
  }
})
