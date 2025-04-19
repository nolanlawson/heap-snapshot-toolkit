import type * as puppeteer from 'puppeteer-core';
export declare function getResourcesPathWithDevToolsHostname(): string;
export declare function loadExtension(name: string, startPage?: string, allowFileAccess?: boolean): Promise<puppeteer.Frame>;
