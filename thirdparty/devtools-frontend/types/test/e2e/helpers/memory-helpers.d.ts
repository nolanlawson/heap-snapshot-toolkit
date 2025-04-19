import type * as puppeteer from 'puppeteer-core';
export declare const MEMORY_TAB_ID = "#tab-heap-profiler";
export declare function navigateToMemoryTab(): Promise<void>;
export declare function takeDetachedElementsProfile(): Promise<void>;
export declare function takeAllocationProfile(): Promise<void>;
export declare function takeAllocationTimelineProfile({ recordStacks }?: {
    recordStacks: boolean;
}): Promise<void>;
export declare function takeHeapSnapshot(name?: string): Promise<void>;
export declare function waitForHeapSnapshotData(): Promise<puppeteer.ElementHandle<Element>[]>;
export declare function waitForNonEmptyHeapSnapshotData(): Promise<void>;
export declare function getDataGridRows(selector: string): Promise<puppeteer.ElementHandle<Element>[]>;
export declare function setClassFilter(text: string): Promise<void>;
export declare function triggerLocalFindDialog(frontend: puppeteer.Page): Promise<void>;
export declare function setSearchFilter(text: string): Promise<void>;
export declare function waitForSearchResultNumber(results: number): Promise<puppeteer.ElementHandle<Element>>;
export declare function findSearchResult(searchResult: string, pollIntrerval?: number): Promise<void>;
interface RetainerChainEntry {
    propertyName: string;
    retainerClassName: string;
}
export declare function assertRetainerChainSatisfies(p: (retainerChain: RetainerChainEntry[]) => boolean): Promise<boolean>;
export declare function waitUntilRetainerChainSatisfies(p: (retainerChain: RetainerChainEntry[]) => boolean): Promise<void>;
export declare function appearsInOrder(targetArray: string[], inputArray: string[]): boolean;
export declare function waitForRetainerChain(expectedRetainers: string[]): Promise<void>;
export declare function changeViewViaDropdown(newPerspective: string): Promise<void>;
export declare function changeAllocationSampleViewViaDropdown(newPerspective: string): Promise<void>;
export declare function focusTableRowWithName(text: string): Promise<void>;
export declare function focusTableRow(row: puppeteer.ElementHandle<Element>): Promise<void>;
export declare function expandFocusedRow(): Promise<void>;
export declare function getSizesFromSelectedRow(): Promise<{
    shallowSize: number;
    retainedSize: number;
}>;
export declare function getCategoryRow(text: string, wait?: boolean): Promise<puppeteer.ElementHandle<Element>>;
export declare function getSizesFromCategoryRow(text: string): Promise<{
    shallowSize: number;
    retainedSize: number;
}>;
export declare function getDistanceFromCategoryRow(text: string): Promise<number>;
export declare function getCountFromCategoryRowWithName(text: string): Promise<number>;
export declare function getCountFromCategoryRow(row: puppeteer.ElementHandle<Element>): Promise<number>;
export declare function getAddedCountFromComparisonRowWithName(text: string): Promise<number>;
export declare function getAddedCountFromComparisonRow(row: puppeteer.ElementHandle<Element>): Promise<number>;
export declare function getRemovedCountFromComparisonRow(row: puppeteer.ElementHandle<Element>): Promise<number>;
export declare function clickOnContextMenuForRetainer(retainerName: string, menuItem: string): Promise<void>;
export declare function restoreIgnoredRetainers(): Promise<void>;
export declare function setFilterDropdown(filter: string): Promise<void>;
export declare function checkExposeInternals(): Promise<void>;
export {};
