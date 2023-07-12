#!/bin/bash

############################################################
# Help                                                     #
############################################################
Help()
{
  # Display Help
  echo
  echo
  echo "Run Cypress tests for o-platform"
  echo
  echo "This script will run Cypress tests for o-platform. By default, it will run all tests in headless mode."
  echo
  echo "To run Cypress tests in headless mode, run the script with the -n option specify a test file without extensions (e.g. preSeededRegularUser)."
  echo
  echo "To run Cypress tests in browser mode, run the script with the -o option."
  echo
  echo "To run Cypress tests in headless mode for CI, run the script with the -ci option. You can also specify a test file (e.g. preSeededRegularUser)."
  echo
  echo "Syntax: run.sh [-h|o|n|ci]"
  echo "options:"
  echo "h     Print this Help."
  echo "o     Opens cypress in browser-mode."
  echo "n     Run a specific test file in headless."
  echo "ci    Run Cypress tests in headless mode for CI."
  echo
}

############################################################
# Main program                                             #
############################################################
Open()
{
  echo "Running Cypress tests for o-platform"
  npm run cy:open
}

# Set variables
test_file=""

############################################################
# Process the input options. Add options as needed.        #
############################################################
# Get the options
while getopts ":ohnc:" option; do
  case $option in
      o) # Opens Cypress
        Open
        exit;;
      h) # display Help
        Help
        exit;;
      n) # Enter a name
        test_file=$OPTARG
        path=$(pwd)
        if [[ -n $test_file ]]; then
          echo "Running Cypress tests for o-platform"
          echo "test_file: $test_file"
          cp -f ../land-local/modes/from-source/.state/static-content/public/Person_1.y4m ./cypress/fixtures || exit && npx cypress run --browser chromium --spec "$path/cypress/e2e/test-journeys/$test_file.cy.ts"
          exit
        fi
        ;;
      c) # Run Cypress tests in headless mode for CI
        test_file=$OPTARG
        path=$(pwd)
        if [[ -c $test_file ]]; then
          echo "Running Cypress tests for o-platform"
          npx cypress run --browser chromium --spec "$path/cypress/e2e/test-journeys/$test_file.cy.ts"
          exit
        else
          Open
        fi
        ;;
      \?) # Invalid option
        echo "Error: Invalid option"
        exit;;
  esac
done


cp -f ../land-local/modes/from-source/.state/static-content/public/Person_1.y4m ./cypress/fixtures || exit && npx cypress run --browser chromium

