import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    
    // Locators
     readonly txtUsername: Locator;
     readonly txtPassword: Locator;
     readonly btnSubmit: Locator;
     readonly txtSuccessfulMessage: Locator;
     readonly txtErrorMessage: Locator;
     readonly btnLogout: Locator;
    

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators with CSS selectors
        this.txtUsername = page.locator('#username');
        this.txtPassword = page.locator('#password');
        this.btnSubmit = page.locator('#submit');
        this.txtSuccessfulMessage=page.locator('//h1[text()="Logged In Successfully"]');
        this.txtErrorMessage=page.locator('//div[@id="error"]');
        this.btnLogout=page.getByRole('link', {name: 'Log out'});
    }

    /**
     * Sets the username in the username field
     * @param username - Username to enter
     */
    async setUsername(username: string){
        await this.txtUsername.fill(username);
    }

    /**
     * Sets the password in the password field
     * @param pwd - Password to enter
     */
    async setPassword(pwd: string) {
        await this.txtPassword.fill(pwd);
    }

    /**
     * Clicks the submit button
     */
    async clickSubmit(){
        await this.btnSubmit.click();
    }

    async clickLogout(){
        await this.btnLogout.click();
    }

    /**
     * Performs complete login action
     * @param username - Username to enter
     * @param password - Password to enter
     */
    async login(username: string, password: string){
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickSubmit();
    }

    // Get successful login message
    async getloginSuccessfulMessage():Promise<null | string>{

        await this.txtSuccessfulMessage.waitFor({state: 'visible', timeout: 10000});
        return(await this.txtSuccessfulMessage.innerText());
    }

     // Get login error message
    async getloginErrorMessage():Promise<null | string>{

        await this.txtErrorMessage.waitFor({state: 'visible'});
        return(await this.txtErrorMessage.textContent());
    }
    
}