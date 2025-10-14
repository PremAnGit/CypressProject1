Automation Testing - Cypress Framework

1. Install Cypress
 
a. Pre-Requisite Steps:
 - You need Node.js installed (and npm, which comes with Node).
 
 - You should have a project folder with a package.json (or run npm init to create one).
 
 - Make sure your Node version meets Cypress’s supported versions.
 
 - Cypress docs list the supported Node/browser versions

b. Installation Steps : 
 - Navigate to your project root in terminal / command prompt.
 
 - Install Cypress as a dev dependency:
 npm install --save-dev cypress

c. To verify the installation, run:
npx cypress open


2. Folder Structure 

/cypress.config.js                          # Main Cypress configuration file
/cypress
  /e2e                                      # End to End Spec files folder containing all the e2e tests.
  /fixtures                                 # Static data (JSON, etc.) used by tests
    example.json
  /support                                  # Support files loaded before each spec
    commands.js                             # Custom commands and utility functions
    e2e.js (or index.js)                    # Global setup / behavior before each test file
/screenshots (generated at runtime)           :contentReference
/ videos (generated at runtime)               :contentReference[oaicite:5]{index=5}
/ downloads (if using downloads in tests)     :contentReference[oaicite:6]{index=6}



3. Create E2E tests
    a. Create the e2e tests in the e2e folder.
    b. Any common steps in the E2E test, add them to commands.js in the support folder.

3. Execute Automation tests
    Letting Test run openly.
    a. npx cypress open
    b. on npm script you can add it as : 
    "scripts": {"cy:open": "cypress open"}
    c. To run headless execution
        i. npx cypress run
        






4. Generate, Merge and display HTML Report using Mochaawesome
