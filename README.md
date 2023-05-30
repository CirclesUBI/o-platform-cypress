# Cypress e2e tests for o-platform

## Requirements

For now these tests are written for the dev branch of o-platform in the [land-local](https://github.com/CirclesUBI/land-local) environment. To run these tests you need to have the [land-local](https://github.com/CirclesUBI/land-local) environment running.

## Quickstart

```bash
# Clone the repo into the root of the circlesUBI project

git clone https://github.com/CirclesUBI/o-platform-cypress.git

cd o-platform-cypress

npm install

# Run all test-journeys in headless mode

./run.sh

# Run specific test-journey in headless mode

./run.sh -n FILENAME_WITHOUT_EXTENSION

# Run tests in cypress-browser

./run.sh -o
```

## CLI Options

Running ./run.sh without any option will, cypress will run all tests in headless mode.

You can pass the following options to the `run.sh` script:

```bash
 h     Print Help.
 o     Opens cypress in browser-mode.
 n     Run a specific test file in headless.
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



