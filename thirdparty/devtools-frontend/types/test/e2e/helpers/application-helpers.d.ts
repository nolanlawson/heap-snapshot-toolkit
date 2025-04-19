export declare function navigateToApplicationTab(testName: string): Promise<void>;
export declare function navigateToServiceWorkers(): Promise<void>;
export declare function navigateToFrame(name: string): Promise<void>;
export declare function navigateToManifestInApplicationTab(testName: string): Promise<void>;
export declare function navigateToStorage(): Promise<void>;
export declare function navigateToOpenedWindows(): Promise<void>;
export declare function navigateToWebWorkers(): Promise<void>;
export declare function navigateToFrameServiceWorkers(frameName: string): Promise<void>;
export declare function navigateToCookiesForTopDomain(): Promise<void>;
export declare function navigateToSessionStorageForTopDomain(): Promise<void>;
export declare function navigateToSharedStorage(): Promise<void>;
export declare function navigateToSharedStorageForTopDomain(): Promise<void>;
export declare function getDataGridData(selector: string, columns: string[]): Promise<{
    [key: string]: string | null;
}[]>;
export declare function getTrimmedTextContent(selector: string): Promise<string[]>;
export declare function getFrameTreeTitles(): Promise<(string | null)[]>;
export declare function getStorageItemsData(columns: string[], leastExpected?: number): Promise<{
    [key: string]: string | null;
}[]>;
export declare function filterStorageItems(filter: string): Promise<void>;
export declare function clearStorageItemsFilter(): Promise<void>;
export declare function clearStorageItems(): Promise<void>;
export declare function selectStorageItemAtIndex(index: number): Promise<void>;
export declare function deleteSelectedStorageItem(): Promise<void>;
export declare function selectCookieByName(name: string): Promise<void>;
export declare function waitForQuotaUsage(p: (quota: number) => boolean): Promise<void>;
export declare function getQuotaUsage(): Promise<number>;
export declare function getPieChartLegendRows(): Promise<(string | null)[][]>;
export declare function unregisterServiceWorker(): Promise<void>;
export declare function veImpressionForApplicationPanel(): {
    impressions: string[];
};
