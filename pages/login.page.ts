import {By, WebDriver} from 'selenium-webdriver';

import {Page} from './page';

export class LoginPage extends Page {

    public constructor(driver: WebDriver) {
        super(driver, '/login');
    }

    public async fillForm(username: string, password: string): Promise<void> {
        await this.driver.findElement(By.id('username')).sendKeys(username);
        await this.driver.findElement(By.id('password')).sendKeys(password);
    }

    public async submitForm(): Promise<void> {
        const submitButton = await this.driver.findElement({
            css: '#login > button[type="submit"]',
        });
        await submitButton.click();
    }
}