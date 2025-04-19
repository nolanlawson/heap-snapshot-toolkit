import * as puppeteer from 'puppeteer-core';
export declare class BrowserWrapper {
    browser: puppeteer.Browser;
    constructor(b: puppeteer.Browser);
    createBrowserContext(): Promise<puppeteer.BrowserContext>;
}
class Launcher {
    static browserSetup(settings: BrowserSettings): Promise<BrowserWrapper>;
    private static launchChrome;
}
interface BrowserSettings {
    enabledBlinkFeatures: string[];
    disabledFeatures: string[];
}
const DEFAULT_BROWSER_SETTINGS: BrowserSettings;
