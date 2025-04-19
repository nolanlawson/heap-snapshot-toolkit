import type * as puppeteer from 'puppeteer-core';
export declare function waitForNetworkTab(): Promise<void>;
export declare function openNetworkTab(): Promise<void>;
/**
 * Select the Network tab in DevTools
 */
export declare function navigateToNetworkTab(testName: string): Promise<void>;
/**
 * Wait until a certain number of requests are shown in the request list.
 * @param numberOfRequests The expected number of requests to wait for.
 * @param selector Optional. The selector to use to get the list of requests.
 */
export declare function waitForSomeRequestsToAppear(numberOfRequests: number): Promise<void>;
export declare function getAllRequestNames(): Promise<(string | null)[]>;
export declare function getNumberOfRequests(): Promise<number>;
export declare function getSelectedRequestName(): Promise<string | null>;
export declare function selectRequestByName(name: string, clickOptions?: puppeteer.ClickOptions): Promise<void>;
export declare function waitForSelectedRequestChange(initialRequestName: string | null): Promise<void>;
export declare function setPersistLog(persist: boolean): Promise<void>;
export declare function setCacheDisabled(disabled: boolean): Promise<void>;
export declare function setInvert(invert: boolean): Promise<void>;
export declare function setTimeWindow(): Promise<void>;
export declare function clearTimeWindow(): Promise<void>;
export declare function setTextFilter(text: string): Promise<void>;
export declare function getTextFilterContent(): Promise<string>;
export declare function clearTextFilter(): Promise<void>;
export declare function getTextFromHeadersRow(row: puppeteer.ElementHandle<Element>): Promise<string[]>;
export declare function elementContainsTextWithSelector(element: puppeteer.ElementHandle<Element>, textContent: string, selector: string): Promise<boolean>;
export declare function veImpressionForNetworkPanel(options?: {
    newFilterBar?: boolean;
}): {
    impressions: string[];
};
