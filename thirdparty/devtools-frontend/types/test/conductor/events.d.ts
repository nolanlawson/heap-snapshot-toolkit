import type * as puppeteer from 'puppeteer-core';
export declare function setupBrowserProcessIO(browser: puppeteer.Browser): void;
export declare function installPageErrorHandlers(page: puppeteer.Page): void;
export declare class ErrorExpectation {
    #private;
    constructor(msg: string | RegExp);
    drop(): puppeteer.ConsoleMessage | undefined;
    get caught(): puppeteer.ConsoleMessage | undefined;
    check(consoleMessage: puppeteer.ConsoleMessage): boolean;
}
export declare function expectError(msg: string | RegExp): ErrorExpectation;
export declare function dumpCollectedErrors(): void;
export declare let fatalErrors: string[];
export declare let expectedErrors: string[];
export declare const uiComponentDocErrors: Error[];
