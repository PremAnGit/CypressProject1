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


2. Create E2E tests
    a. Create the e2e tests in the e2e folder.
    b. Any common steps in the E2E test, add them to commands.js in the support folder.

3. Execute Automation tests
    Letting Test run openly.
    a. npx cypress open( this will by default will open chrome driver).
    b. for Edge user You can use the 
       
         npx cypress run --browser edge

    c. on npm script you can add it as : 
    "scripts": {"cy:open": "cypress open"}
    
    d. To run headless execution
        i. npx cypress run
        
4. Generate, Merge and display HTML Report using Mochaawesome

     a. Package dependencies for mochawesome are 
        - mochawsome, 
        - mochawesome-merge, 
        - mochawsome-report-generator (aka marge)

    and command to install it
    npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

    b. Once test run and jSON files are generated, Merge the JSON files into a single JSON file
    npx mochawesome-merge cypress/reports/mochawesome-report/*.json > merged-report.json

    c. Generate HTML report from the merged JSON using margee:
    npx marge merged-report.json --reportDir final-report-directory

    d. 

