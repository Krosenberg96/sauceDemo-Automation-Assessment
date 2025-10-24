SauceDemo Automation Framework
Overview

This project is an end-to-end automation framework built with WebdriverIO and Cucumber for testing the SauceDemo
 application. Tests are executed on LambdaTest cloud infrastructure to support cross-browser and cross-platform testing.


Prerequisites

Node.js v20+

npm or yarn

LambdaTest account with credentials:

LT_USERNAME

LT_ACCESS_KEY


Set your environment variables with Git Bash -

export LT_USERNAME=your_username
export LT_ACCESS_KEY=your_access_key

or powershell

setx LT_USERNAME "your_username"
setx LT_ACCESS_KEY "your_access_key"


To get the repo up and running with git bash -

git clone "https://github.com/Krosenberg96/sauceDemo-Automation-Assessment.git"
cd saucedemo-assessment
npm install

Configuration


The framework uses two main WDIO config files:

wdio.conf.ts – Base configuration for local runs.
wdio.lambdatest.conf.ts – LambdaTest configuration for remote execution.

Key configurations:

Capabilities defined in wdio.lambdatest.conf.ts for browser, platform, and LambdaTest options.
Cucumber options define step definitions and hooks.


Local Execution - with git bash

npx wdio run ./wdio.conf.ts


LambdaTest Execution - with git bash

npx wdio run ./wdio.lambdatest.conf.ts


Test Creation structure:

Writing Tests

Feature files live in features/

Step definitions live in steps/

Page Objects live in pageObjects/



Hooks

before and after hooks are defined in steps/hooks.ts.
Used for browser initialization, teardown, and scenario start/stop logging.


Reporting

Spec reporter enabled by default.
Logs test execution in console.
LambdaTest provides dashboard for video, console, network, and Selenium logs.


Notes

Ensure your environment variables are correctly set before running tests on LambdaTest.
Supports Chrome, Firefox, Edge on Windows and macOS platforms.
Timeout and retry configurations are defined in wdio.lambdatest.conf.ts