import { defineConfig } from 'cypress'

export default defineConfig({
  hosts: {
    "*.localhost": "127.0.0.1"
  },
  e2e: {
    // supportFile: "support/initVideo.ts",
    baseUrl: "https://o-platform.circlesubi.localhost",
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser:any = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // Mac/Linux
          launchOptions.args.push(
              '--use-fake-device-for-media-stream --use-file-for-fake-video-capture=/fixtures/Person_1.y4m'
          )
        }

        return launchOptions
      })
    }
  },
})
