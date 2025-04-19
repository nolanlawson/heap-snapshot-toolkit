import type * as puppeteer from 'puppeteer-core';
export declare function waitForSoftContextMenu(): Promise<puppeteer.ElementHandle<Element>>;
export declare function assertTopLevelContextMenuItemsText(expectedOptions: string[]): Promise<void>;
export declare function findSubMenuEntryItem(text: string): Promise<puppeteer.ElementHandle<Element>>;
export declare function assertSubMenuItemsText(subMenuText: string, expectedOptions: string[]): Promise<void>;
export declare function openSoftContextMenuAndClickOnItem(selector: string, label: string): Promise<void>;
export declare function openSubMenu(selector: string, text: string): Promise<void>;
