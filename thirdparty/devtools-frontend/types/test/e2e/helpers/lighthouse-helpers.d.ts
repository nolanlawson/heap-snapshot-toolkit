import type { ElementHandle } from 'puppeteer-core';
export declare function navigateToLighthouseTab(path?: string): Promise<ElementHandle<Element>>;
export declare function waitForResult(): Promise<{
    reportEl: ElementHandle<Element>;
    lhr: any;
    artifacts: any;
}>;
/**
 * Set the category checkboxes
 * @param selectedCategoryIds One of 'performance'|'accessibility'|'best-practices'|'seo'|'pwa'
 */
export declare function selectCategories(selectedCategoryIds: string[]): Promise<void>;
export declare function selectRadioOption(value: string, optionName: string): Promise<void>;
export declare function selectMode(mode: 'navigation' | 'timespan' | 'snapshot'): Promise<void>;
export declare function selectDevice(device: 'mobile' | 'desktop'): Promise<void>;
export declare function setToolbarCheckboxWithText(enabled: boolean, textContext: string): Promise<void>;
export declare function setThrottlingMethod(throttlingMethod: 'simulate' | 'devtools'): Promise<void>;
export declare function clickStartButton(): Promise<void>;
export declare function isGenerateReportButtonDisabled(): Promise<boolean>;
export declare function getHelpText(): Promise<string | null>;
export declare function openStorageView(): Promise<void>;
export declare function clearSiteData(): Promise<void>;
export declare function waitForStorageUsage(p: (quota: number) => boolean): Promise<void>;
export declare function waitForTimespanStarted(): Promise<void>;
export declare function endTimespan(): Promise<void>;
export declare function getAuditsBreakdown(lhr: any, flakyAudits?: string[]): {
    auditResults: any[];
    erroredAudits: any[];
    failedAudits: any[];
};
export declare function getTargetViewport(): Promise<{
    innerHeight: number;
    innerWidth: number;
    outerWidth: number;
    outerHeight: number;
    devicePixelRatio: number;
}>;
export declare function getServiceWorkerCount(): Promise<number>;
export declare function registerServiceWorker(): Promise<void>;
export declare function interceptNextFileSave(): Promise<() => Promise<string>>;
export declare function renderHtmlInIframe(html: string): Promise<ElementHandle<Document>>;
