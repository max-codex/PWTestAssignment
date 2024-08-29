import 'dotenv/config'; // loading variables from .env file
import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { ErrorPage } from './ErrorPage';



// Dynamically passing Configuration or environment variables
const baseUrl = process.env.BASE_URL as any;
const validUsername = process.env.VALID_USERNAME as string;
const validPassword = process.env.VALID_PASSWORD as string;
const invalidUsername = process.env.INVALID_USERNAME as string;
const invalidPassword = process.env.INVALID_PASSWORD as string;


test.describe('Login page test cases', () => {
    // Every test will create its new browser context and page
    //  We would use page object classes to perform validations and deal with web elements
    // Postive login test case
    test('Positive LogIn Test', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await browser.newPage();
        const loginPage = new LoginPage(page);
        const landingPage = new HomePage(page);

        await loginPage.goto(baseUrl);
        await loginPage.login(validUsername, validPassword);

        await page.waitForURL(/logged-in-successfully/);
        expect(await landingPage.isLoaded()).toBeTruthy();
        const successMessage = await landingPage.getSuccessMessage();
        expect(successMessage).toContain('Congratulations');
        expect(successMessage).toContain('successfully logged in');
        expect(await landingPage.isLogoutButtonVisible());

        await context.close();
        
    });
    // Negative username check test
    test('Negative username test', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const loginPage = new LoginPage(page);
        const errorPage = new ErrorPage(page);

        await loginPage.goto(baseUrl);
        await loginPage.login(invalidUsername, validPassword);
        const errorMessage = await errorPage.getErrorMessage();
        expect(errorMessage).toBe("Your username is invalid!");
        // expect(errorMessage).toContain("username is invalid!");

        await context.close();
    });
    // Negative password check test
    test('Negative password test', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const loginPage = new LoginPage(page);
        const errorPage = new ErrorPage(page);

        await loginPage.goto(baseUrl);
        await loginPage.login(validUsername, invalidPassword);

        const errorMessage = await errorPage.getErrorMessage();
        expect(errorMessage).toBe('Your password is invalid!');
        // expect(errorMessage).toContain("password is invalid!");
    });
});