import type * as puppeteer from 'puppeteer-core';
import { AsyncScope } from '../conductor/async-scope.js';
import type { DevToolsFrontendReloadOptions } from '../conductor/frontend_tab.js';
import { getDevToolsFrontendHostname, reloadDevTools } from '../conductor/hooks.js';
import { getBrowserAndPages } from '../conductor/puppeteer-state.js';
import { getTestServerPort } from '../conductor/server_port.js';
import type { DevToolsPage } from '../e2e_non_hosted/shared/frontend-helper.js';
export { platform } from '../conductor/mocha-interface-helpers.js';
declare global {
    interface Window {
        __pendingEvents: Map<string, Event[]>;
        __eventHandlers: WeakMap<Element, Map<string, Promise<void>>>;
        __getRenderCoordinatorPendingFrames(): number;
    }
}
export interface ClickOptions {
    root?: puppeteer.ElementHandle;
    clickOptions?: puppeteer.ClickOptions;
    maxPixelsFromLeft?: number;
}
export declare const withControlOrMetaKey: (action: () => Promise<void>, root?: puppeteer.Page) => Promise<void>;
export declare const click: (selector: string, options?: ClickOptions) => Promise<puppeteer.ElementHandle<Element>>;
export declare const hover: (selector: string, options?: {
    root?: puppeteer.ElementHandle;
}) => Promise<puppeteer.ElementHandle<Element>>;
/**
 * Schedules a task in the frontend page that ensures that previously
 * handled tasks have been handled.
 */
export declare function drainFrontendTaskQueue(): Promise<void>;
/**
 * @deprecated This method is not able to recover from unstable DOM. Use click(selector) instead.
 */
export declare function clickElement(element: puppeteer.ElementHandle, options?: ClickOptions, devToolsPage?: DevToolsPage): Promise<void>;
/**
 * @deprecated This method is not able to recover from unstable DOM. Use hover(selector) instead.
 */
export declare function hoverElement(element: puppeteer.ElementHandle): Promise<void>;
export declare const doubleClick: (selector: string, options?: {
    root?: puppeteer.ElementHandle;
    clickOptions?: puppeteer.ClickOptions;
}) => Promise<puppeteer.ElementHandle<Element>>;
export declare const typeText: (text: string) => Promise<void>;
export declare const pressKey: (key: puppeteer.KeyInput, modifiers?: {
    control?: boolean;
    alt?: boolean;
    shift?: boolean;
}) => Promise<void>;
export declare const pasteText: (text: string) => Promise<void>;
export declare const $: <ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, root?: puppeteer.ElementHandle, handler?: string) => Promise<puppeteer.ElementHandle<ElementType extends null ? import("typed-query-selector/parser.js").ParseSelector<Selector, Element> : ElementType>>;
export declare const $$: <ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, root?: puppeteer.JSHandle, handler?: string) => Promise<puppeteer.ElementHandle<ElementType extends null ? import("typed-query-selector/parser.js").ParseSelector<Selector, Element> : ElementType>[]>;
/**
 * Search for an element based on its textContent.
 *
 * @param textContent The text content to search for.
 * @param root The root of the search.
 */
export declare const $textContent: (textContent: string, root?: puppeteer.ElementHandle) => Promise<puppeteer.ElementHandle<Element>>;
/**
 * Search for all elements based on their textContent
 *
 * @param textContent The text content to search for.
 * @param root The root of the search.
 */
export declare const $$textContent: (textContent: string, root?: puppeteer.ElementHandle) => Promise<puppeteer.ElementHandle<Element>[]>;
export declare const timeout: (duration: number) => Promise<void>;
export declare const getTextContent: <ElementType extends Element = Element>(selector: string, root?: puppeteer.ElementHandle) => Promise<string | undefined>;
export declare const getAllTextContents: (selector: string, root?: puppeteer.JSHandle, handler?: string) => Promise<Array<string | null>>;
/**
 * Match multiple elements based on a selector and return their textContents, but only for those
 * elements that are visible.
 *
 * @param selector jquery selector to match
 * @returns array containing text contents from visible elements
 */
export declare const getVisibleTextContents: (selector: string) => Promise<(string | undefined)[]>;
export declare const waitFor: <ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope, handler?: string) => Promise<puppeteer.ElementHandle<ElementType extends null ? import("typed-query-selector/parser.js").ParseSelector<Selector, Element> : ElementType>>;
export declare const waitForVisible: <ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope, handler?: string) => Promise<puppeteer.ElementHandle<ElementType extends null ? import("typed-query-selector/parser.js").ParseSelector<Selector, Element> : ElementType>>;
export declare const waitForMany: <ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, count: number, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope, handler?: string) => Promise<puppeteer.ElementHandle<ElementType extends null ? import("typed-query-selector/parser.js").ParseSelector<Selector, Element> : ElementType>[]>;
export declare const waitForNone: (selector: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope, handler?: string) => Promise<boolean>;
export declare const waitForAria: <ElementType extends Element = Element>(selector: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope) => Promise<puppeteer.ElementHandle<ElementType extends null ? Element : ElementType>>;
export declare const waitForAriaNone: (selector: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope) => Promise<boolean>;
export declare const waitForElementWithTextContent: (textContent: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope, devToolsPage?: DevToolsPage) => Promise<puppeteer.ElementHandle<Element>>;
export declare const waitForElementsWithTextContent: (textContent: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope) => Promise<puppeteer.ElementHandle<Element>[]>;
export declare const waitForNoElementsWithTextContent: (textContent: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope) => Promise<boolean>;
export declare const waitForFunction: <T>(fn: () => Promise<T | undefined>, asyncScope?: AsyncScope, description?: string) => Promise<NonNullable<Awaited<T>>>;
export declare const waitForFunctionWithTries: <T>(fn: () => Promise<T | undefined>, options?: {
    tries: number;
}, asyncScope?: AsyncScope) => Promise<NonNullable<Awaited<T>> | undefined>;
export declare const waitForWithTries: (selector: string, root?: puppeteer.ElementHandle, options?: {
    tries: number;
}, asyncScope?: AsyncScope, handler?: string) => Promise<puppeteer.ElementHandle<Element> | undefined>;
export declare const debuggerStatement: (frontend: puppeteer.Page) => Promise<void>;
export declare const logToStdOut: (msg: string) => void;
export declare const logFailure: () => void;
export declare const enableExperiment: (experiment: string, options?: DevToolsFrontendReloadOptions) => Promise<void>;
export declare const disableExperiment: (experiment: string, options?: DevToolsFrontendReloadOptions) => Promise<void>;
export declare const setDevToolsSettings: (settings: Record<string, string>) => Promise<void>;
export declare function goToHtml(html: string): Promise<void>;
export declare const goTo: (url: string, options?: puppeteer.WaitForOptions) => Promise<void>;
export declare const overridePermissions: (permissions: puppeteer.Permission[]) => Promise<void>;
export declare const clearPermissionsOverride: () => Promise<void>;
export declare const goToResource: (path: string, options?: puppeteer.WaitForOptions) => Promise<void>;
export declare const goToResourceWithCustomHost: (host: string, path: string) => Promise<void>;
export declare const getResourcesPath: (host?: string) => string;
export declare const step: <T = unknown>(description: string, step: () => Promise<T> | T) => Promise<Awaited<T>>;
export declare const waitForAnimationFrame: () => Promise<void>;
export declare const activeElement: () => Promise<puppeteer.ElementHandle<Element>>;
export declare const activeElementTextContent: () => Promise<string | null>;
export declare const activeElementAccessibleName: () => Promise<string | null>;
export declare const tabForward: (page?: puppeteer.Page) => Promise<void>;
export declare const tabBackward: (page?: puppeteer.Page) => Promise<void>;
type Awaitable<T> = T | PromiseLike<T>;
export declare const selectTextFromNodeToNode: (from: Awaitable<puppeteer.ElementHandle>, to: Awaitable<puppeteer.ElementHandle>, direction: 'up' | 'down') => Promise<string>;
export declare const clickMoreTabsButton: (root?: puppeteer.ElementHandle<Element>) => Promise<void>;
export declare const closePanelTab: (panelTabSelector: string) => Promise<void>;
export declare const closeAllCloseableTabs: () => Promise<void>;
export declare const enableCDPLogging: () => Promise<void>;
export declare const enableCDPTracking: () => Promise<void>;
export declare const logOutstandingCDP: () => Promise<void>;
export declare const selectOption: (select: puppeteer.ElementHandle<HTMLSelectElement>, value: string) => Promise<void>;
export declare const scrollElementIntoView: (selector: string, root?: puppeteer.ElementHandle, devToolsPage?: DevToolsPage) => Promise<void>;
export declare const installEventListener: (frontend: puppeteer.Page, eventType: string) => Promise<void>;
export declare const getPendingEvents: (frontend: puppeteer.Page, eventType: string) => Promise<Event[] | undefined>;
export declare function prepareWaitForEvent(element: puppeteer.ElementHandle, eventType: string): Promise<void>;
export declare function waitForEvent(element: puppeteer.ElementHandle, eventType: string): Promise<void>;
export declare const hasClass: (element: puppeteer.ElementHandle<Element>, classname: string) => Promise<boolean>;
export declare const waitForClass: (element: puppeteer.ElementHandle<Element>, classname: string) => Promise<void>;
/**
 * This is useful to keep TypeScript happy in a test - if you have a value
 * that's potentially `null` you can use this function to assert that it isn't,
 * and satisfy TypeScript that the value is present.
 */
export declare function assertNotNullOrUndefined<T>(val: T): asserts val is NonNullable<T>;
export { getBrowserAndPages, getDevToolsFrontendHostname, getTestServerPort, reloadDevTools };
export declare function matchString(actual: string, expected: string | RegExp): true | string;
export declare function matchArray<A, E>(actual: A[], expected: E[], comparator: (actual: A, expected: E) => true | string): true | string;
export declare function assertOk<Args extends unknown[]>(check: (...args: Args) => true | string): (...args: Args) => void;
export declare function matchTable<A, E>(actual: A[][], expected: E[][], comparator: (actual: A, expected: E) => true | string): string | true;
export declare const matchStringArray: (actual: string[], expected: Array<string | RegExp>) => string | true;
export declare const assertMatchArray: (actual: string[], expected: (string | RegExp)[]) => void;
export declare const matchStringTable: (actual: string[][], expected: Array<Array<string | RegExp>>) => string | true;
export declare function renderCoordinatorQueueEmpty(): Promise<void>;
export declare function setCheckBox(selector: string, wantChecked: boolean): Promise<void>;
export declare const summonSearchBox: () => Promise<void>;
export declare const replacePuppeteerUrl: (value: string) => string;
export declare function raf(page: puppeteer.Page): Promise<void>;
export declare function readClipboard(): Promise<string>;
