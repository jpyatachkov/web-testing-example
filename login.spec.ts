import {Builder, WebDriver} from 'selenium-webdriver';
import {LoginPage, SecurePage} from './pages';

describe('login', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .build();
    });

    afterAll(async () => {
        await driver.close();
    });

    describe('login with invalid credentials', () => {
        it('should keep same page with error', async () => {
            const loginPage = new LoginPage(driver);

            await loginPage.open();
            await loginPage.fillForm('lol', 'kek');
            await loginPage.submitForm();

            expect(await new SecurePage(driver).isOpened()).toBeFalsy();
            expect(await loginPage.hasAnyFlashWithText('Your username is invalid!')).toBeTruthy();
        });
    });

    describe('login with valid credentials', () => {
        it('should be redirected on secure page', async () => {
            const loginPage = new LoginPage(driver);

            await loginPage.open();
            await loginPage.fillForm('tomsmith', 'SuperSecretPassword!');
            await loginPage.submitForm();

            const securePage = new SecurePage(driver);

            expect(await securePage.isOpened()).toBeTruthy();
            expect(await securePage.hasAnyFlashWithText('You logged into a secure area!')).toBeTruthy();
        });
    });
});