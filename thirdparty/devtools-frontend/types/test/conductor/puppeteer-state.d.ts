import * as puppeteer from 'puppeteer-core';
interface BrowserAndPages {
    target: puppeteer.Page;
    frontend: puppeteer.Page;
    browser: puppeteer.Browser;
}
const clearPuppeteerState: () => void;
const setBrowserAndPages: (newValues: BrowserAndPages) => void;
export declare const getBrowserAndPages: () => BrowserAndPages;
const registerHandlers: () => void;
