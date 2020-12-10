import {WebDriver} from 'selenium-webdriver';

export abstract class Page {

    public constructor(
        protected readonly driver: WebDriver,
        private readonly route: string,
    ) {
    }

    public async open(): Promise<void> {
        await this.driver.get(`http://the-internet.herokuapp.com${this.route}`);
    }

    public async isOpened(): Promise<boolean> {
        return this.driver.getCurrentUrl().then(url => url.endsWith(this.route));
    }

    public async hasAnyFlashWithText(text: string): Promise<boolean> {
        const elements = await this
            .driver
            .findElements({
                css: '[data-alert]',
            });

        if (!elements.length) {
            return false;
        }

        const textContents = await Promise.all(elements.map(e => e.getText()));

        return textContents.some(t => t.includes(text));
    }
}
