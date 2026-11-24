import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';

let config: TestConfig;
let loginPage: LoginPage;


// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl);


  // Initialize page objects
  loginPage = new LoginPage(page);

  });

  // Cleanup after each test
  test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab (good practice in local/dev run)
  });

// POSITIVE TEST CASES
// TC01 - Login with valid username and password

  test('TC01 - Successful login with valid credentials',async()=>{

    //Enter valid credentials and log in
    await loginPage.setUsername(config.username);
    await loginPage.setPassword(config.password);
    await loginPage.clickSubmit();
    

    // Verify successful login
    const isLoggedIn=await loginPage.getloginSuccessfulMessage();
    expect(isLoggedIn?.trim()).toBe('Logged In Successfully');
    
    // Verify logout link
    await expect(loginPage.btnLogout).toBeVisible();
  });

    // TC02 - Verify successful login message
   test('TC02 - Verify success message after login', async () => {

    await loginPage.login(config.username, config.password);

    await expect(loginPage.txtSuccessfulMessage).toBeVisible();

    const message = await loginPage.getloginSuccessfulMessage();

    expect(message?.trim()).toBe('Logged In Successfully');
});


// TC03 - Verify Logout link visibility
test('TC03 - Verify Logout link after successful login', async () => {

    await loginPage.login(config.username, config.password);

    await expect(loginPage.btnLogout).toBeVisible();
});


// TC04 - Verify Logout functionality
test('TC04 - Verify user can logout successfully', async ({ page }) => {

    await loginPage.login(config.username, config.password);

    await expect(loginPage.txtSuccessfulMessage).toBeVisible();

    await loginPage.clickLogout();

    await expect(page).toHaveURL(/practice-test-login/);

    await expect(loginPage.btnSubmit).toBeVisible();
});


// TC05 - Verify login page elements
test('TC05 - Verify username, password and Submit button', async () => {

    await expect(loginPage.txtUsername).toBeVisible();

    await expect(loginPage.txtPassword).toBeVisible();

    await expect(loginPage.btnSubmit).toBeVisible();
});


// ==========================================
// NEGATIVE TEST CASES
// ==========================================

// TC06 - Invalid username and valid password
test('TC06 - Login with invalid username', async () => {

    await loginPage.login(config.invalidUsername,config.password);

    const errorMessage = await loginPage.getloginErrorMessage();

    expect(errorMessage).toBe('Your username is invalid!');
});


// TC07 - Valid username and invalid password
test('TC07 - Login with invalid password', async () => {

    await loginPage.login(config.username,config.invalidPassword);

    const errorMessage = await loginPage.getloginErrorMessage();

    expect(errorMessage).toBe('Your password is invalid!');
});


// TC08 - Invalid username and invalid password
test('TC08 - Login with both invalid credentials', async () => {

    await loginPage.login(config.invalidUsername,config.invalidPassword);

    await expect(loginPage.txtErrorMessage).toBeVisible();

    const errorMessage = await loginPage.getloginErrorMessage();

    expect(errorMessage).toContain('invalid');
});


// TC09 - Blank username
test('TC09 - Login with blank username', async () => {

    await loginPage.login('',config.password);

    await expect(pageErrorLocator(loginPage)).toBeVisible();
});


// TC10 - Blank password
test('TC10 - Login with blank password', async () => {

    await loginPage.login(config.username,'');

    await expect(pageErrorLocator(loginPage)).toBeVisible();
});

function pageErrorLocator(loginPage: LoginPage) {
    return loginPage.txtErrorMessage;
}

    
