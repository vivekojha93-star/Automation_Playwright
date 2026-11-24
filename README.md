
# Playwright Automation Testing Framework

## 1. Project Overview

This project is an automation testing framework developed using Playwright with TypeScript.

The framework follows the Page Object Model (POM) design pattern to improve code reusability, maintainability, and readability.

The project automates positive and negative login scenarios, including successful login, invalid credentials, blank fields, and logout functionality.

## 2. Technologies Used

- Playwright
- TypeScript
- Node.js
- TypeScript
- Visual Studio Code
- Page Object Model (POM)
- HTML Test Reports

## 3. Project Structure

```text
Automation_Playwright/
│
├── pages/
│   └── LoginPage.ts
│
├── tests/
│   └── Login.spec.ts
│
├── test-results/
│
├── playwright-report/
│
├── test.config.ts
│
├── playwright.config.ts
│
├── package.json
│
└── README.md
```

## 4. Test Scenarios Covered

### Positive Test Cases

| Test Case | Description |
|---|---|
| TC01 | Login with valid username and password |
| TC02 | Verify successful login message |
| TC03 | Verify Logout link visibility |
| TC04 | Verify logout functionality |
| TC05 | Verify username, password and Submit button |

### Negative Test Cases

| Test Case | Description |
|---|---|
| TC06 | Login with invalid username |
| TC07 | Login with invalid password |
| TC08 | Login with invalid username and password |
| TC09 | Login with blank username |
| TC10 | Login with blank password |

## 5. Framework Design

The project follows the Page Object Model.

**LoginPage.ts**
- Stores web element locators.
- Contains reusable login methods.
- Handles username and password entry.
- Handles login and logout actions.
- Retrieves success and error messages.

**Login.spec.ts**
- Contains test scenarios.
- Executes positive and negative test cases.
- Validates expected results using Playwright assertions.

**test.config.ts**
- Stores application URL and test credentials.
- Provides test data for login scenarios.

## 6. Prerequisites

Install the following before executing the project:

- Node.js
- Visual Studio Code
- Playwright
- TypeScript

## 7. Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Navigate to the project directory:

```bash
cd Automation_Playwright
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## 8. Execute Test Cases

Run all test cases:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests using one worker:

```bash
npx playwright test --workers=1
```

Run a specific test case:

```bash
npx playwright test -g "TC01"
```

Run tests in Chromium:

```bash
npx playwright test --project=chromium
```

## 9. Test Execution Report

Generate and open the HTML report:

```bash
npx playwright show-report
```

The HTML report provides:

- Total test cases executed
- Passed test cases
- Failed test cases
- Execution duration
- Error details
- Test execution results

## 10. Key Automation Features

- Page Object Model implementation
- Reusable methods
- CSS and XPath locators
- Positive and negative testing
- Explicit element waiting
- Playwright auto-waiting
- Assertions and validations
- Cross-browser testing support
- HTML reporting
- Parallel execution support

## 11. Future Enhancements

- API automation testing
- Data-driven testing
- Environment-based configuration
- Screenshot capture on failure
- CI/CD integration with GitHub Actions
- Cross-browser execution
- Reusable fixtures
- Advanced reporting

## 12. Author

**Vivek Kumar Ojha**

Automation QA Engineer

Skills:
- Manual Testing
- Automation Testing
- Playwright with TypeScript
- API Testing
- Postman
- SQL
- Page Object Model

---

**Project:** Playwright Automation Framework  
**Language:** TypeScript  
**Automation Tool:** Playwright  
**Design Pattern:** Page Object Model
