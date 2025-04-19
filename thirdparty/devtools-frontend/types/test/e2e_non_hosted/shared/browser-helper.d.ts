import * as puppeteer from 'puppeteer-core';
export declare class BrowserWrapper {
    browser: puppeteer.Browser;
    constructor(b: puppeteer.Browser);
    createBrowserContext(): Promise<puppeteer.BrowserContext>;
}
export declare class Launcher {
    static browserSetup(settings: BrowserSettings): Promise<BrowserWrapper>;
    private static launchChrome;
}
export interface BrowserSettings {
    enabledBlinkFeatures: string[];
    disabledFeatures: string[];
}
export declare const DEFAULT_BROWSER_SETTINGS: BrowserSettings;
