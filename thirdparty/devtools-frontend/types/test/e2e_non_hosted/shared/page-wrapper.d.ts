import type * as puppeteer from 'puppeteer-core';
export declare class PageWrapper {
    page: puppeteer.Page;
    evaluate: puppeteer.Page['evaluate'];
    bringToFront: puppeteer.Page['bringToFront'];
    constructor(page: puppeteer.Page);
    screenshot(): Promise<string>;
    reload(): Promise<void>;
}
