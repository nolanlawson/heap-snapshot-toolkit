import type * as puppeteer from 'puppeteer-core';
export declare const assertElementScreenshotUnchanged: (element: puppeteer.ElementHandle | null, fileName: string, options?: Partial<puppeteer.ScreenshotOptions>) => Promise<void>;
export declare function waitForDialogAnimationEnd(root?: puppeteer.ElementHandle): Promise<void>;
