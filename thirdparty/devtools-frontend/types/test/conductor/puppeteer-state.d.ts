import * as puppeteer from 'puppeteer-core';
export interface BrowserAndPages {
    target: puppeteer.Page;
    frontend: puppeteer.Page;
    browser: puppeteer.Browser;
}
export declare const clearPuppeteerState: () => void;
export declare const setBrowserAndPages: (newValues: BrowserAndPages) => void;
export declare const getBrowserAndPages: () => BrowserAndPages;
export declare const registerHandlers: () => void;
