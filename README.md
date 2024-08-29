# Playwright Login Test Suite

This project contains Playwright test cases for testing login functionality on the Practice Test Automation website using Playwright with TypeScript. The tests cover positive and negative login scenarios using the Page Object Model.

## Test Cases

### Test case 1: Positive LogIn test

1. **Positive LogIn Test**
    - Opens the login page.
    - Types the username and password.
    - Submits the form.
    - Verifies that the new page URL contains `practicetestautomation.com/logged-in-successfully/`.
    - Checks that the page contains the expected success text ('Congratulations' or 'successfully logged in').
    - Verifies that the "Log out" button is displayed.

2. **Negative Username Test**
    - Opens the login page.
    - Types an incorrect username and a valid password.
    - Submits the form.
    - Checks that an error message is displayed.
    - Verifies that the error message text is 'Your username is invalid!'.

3. **Negative Password Test**
    - Opens the login page.
    - Types a valid username and an incorrect password.
    - Submits the form.
    - Checks that an error message is displayed.
    - Verifies that the error message text is 'Your password is invalid!'.

## Setup

### Required Libraries

Ensure that the following libraries are installed:

- [Playwright](https://playwright.dev/docs/intro)
- [dotenv](https://www.npmjs.com/package/dotenv)

### Installation

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Check `.env` File**

    `.env` file is already present in the root of project directory.

## Running Tests

To run the test cases, use the following command:

```bash
npx playwright test
```

for specific test cases,

```bash
npx playwright test tests/login.spec.ts
```

For running test cases without headless,

```bash
npx playwright test --headless
```

## Test Structure

- `login.spec.ts`: Contains the test cases for login functionality using Playwright.
- `LoginPage.ts`: Page object class for the login page.
- `LoggedInPage.ts`: Page object class for the logged-in page.
- `ErrorPage.ts`: Page object class for the error page.

## Contribution

Feel free to fork the repository and submit pull requests. For any issues or suggestions, please open an issue on GitHub.
