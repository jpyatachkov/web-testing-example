import {Page} from './page';
import {WebDriver} from 'selenium-webdriver';

export class SecurePage extends Page {

    public constructor(driver: WebDriver) {
        super(driver, '/secure');
    }
}