import { defineConfig } from 'cypress'

export default defineConfig({
  hosts: {
    "*.localhost": "127.0.0.1"
  },
  e2e: {
    baseUrl: "https://o-platform.localhost",
  },
})