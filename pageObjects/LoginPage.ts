import {$, browser} from "@wdio/globals"

export default class LoginPage {
    // Selectors
    private get usernameInput() {
        return $('#user-name');
    }

    private get passwordInput() {
        return $('#password');
    }

    private get loginButton() {
        return $('#login-button');
    }

    // Method to open the login page
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    // Method to perform login action
    async login(username: string, password: string) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}