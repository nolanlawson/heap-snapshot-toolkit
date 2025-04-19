import type * as puppeteer from 'puppeteer-core';
import { PageWrapper } from './page-wrapper.js';
export declare class InspectedPage extends PageWrapper {
    readonly serverPort: number;
    constructor(page: puppeteer.Page, serverPort: number);
    goTo(url: string, options?: puppeteer.WaitForOptions): Promise<void>;
    goToResource(path: string, options?: puppeteer.WaitForOptions): Promise<void>;
    getResourcesPath(host?: string): string;
}
export declare function setupInspectedPage(context: puppeteer.BrowserContext, serverPort: number): Promise<InspectedPage>;
