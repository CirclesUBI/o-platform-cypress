# Cypress e2e tests for o-platform

## Requirements

For now these tests are written for the dev branch of o-platform in the [land-local](https://github.com/CirclesUBI/land-local) environment. To run these tests you need to have the [land-local](https://github.com/CirclesUBI/land-local) environment running.

## Quickstart

```bash
# Clone the repo into the root of the circlesUBI project

git clone https://github.com/CirclesUBI/o-platform-cypress.git

cd o-platform-cypress

npm install

# Run tests in headless mode

npm run cy:run

# Run tests in cypress-browser

npm run cy:open
```

## Browsers

By default cypress runs in electron. However, these tests are written for chromium. To run in chromium, you need to install chromium on your system.

## Start-Scripts

```json
{
    "cy:open": "cp -f ../land-local/modes/from-source/.state/static-content/public/Person_1.y4m ./cypress/fixtures || exit && cypress open",
    "cy:run": "cp -f ../land-local/modes/from-source/.state/static-content/public/Person_1.y4m ./cypress/fixtures || exit && cypress run --browser chromium"
}
```

## Cypress Video and Screenshots

Cypress will record a video of the test run and if a test fail take screenshots of the test run. These are stored in the `cypress/videos` and `cypress/screenshots` folders.



