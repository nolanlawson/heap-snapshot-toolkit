import type * as puppeteer from 'puppeteer-core';
interface DevToolsFrontendCreationOptions {
    browser: puppeteer.Browser;
    testServerPort: number;
    targetId: string;
}
export interface DevToolsFrontendReloadOptions {
    selectedPanel?: {
        name: string;
        selector?: string;
    };
    canDock?: boolean;
    queryParams?: {
        panel?: string;
    };
    drawerShown?: boolean;
}
/**
 * Wrapper class around `puppeteer.Page` that helps with setting up and
 * managing a DevTools frontend tab.
 */
export declare class DevToolsFrontendTab {
    #private;
    readonly page: puppeteer.Page;
    private static readonly DEFAULT_TAB;
    private static tabCounter;
    private constructor();
    static create({ browser, testServerPort, targetId }: DevToolsFrontendCreationOptions): Promise<DevToolsFrontendTab>;
    /** Same as `reload` but also clears out experiments and settings (window.localStorage really) */
    reset(): Promise<void>;
    reload(options?: DevToolsFrontendReloadOptions): Promise<void>;
    /**
     * Returns the current hostname of this frontend tab. This might not be
     * consistent with the intial URL in case the page was navigated to
     * a different origin.
     */
    hostname(): string;
}
declare function loadEmptyPageAndWaitForContent(target: puppeteer.Page): Promise<void>;
