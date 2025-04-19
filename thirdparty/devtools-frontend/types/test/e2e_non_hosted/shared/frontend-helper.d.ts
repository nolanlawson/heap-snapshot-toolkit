import type * as puppeteer from 'puppeteer-core';
import { AsyncScope } from '../../conductor/async-scope.js';
import { PageWrapper } from './page-wrapper.js';
export type Action = (element: puppeteer.ElementHandle) => Promise<void>;
export interface ClickOptions {
    root?: puppeteer.ElementHandle;
    clickOptions?: puppeteer.ClickOptions;
    maxPixelsFromLeft?: number;
}
type DeducedElementType<ElementType extends Element | null, Selector extends string> = ElementType extends null ? puppeteer.NodeFor<Selector> : ElementType;
export declare class DevToolsPage extends PageWrapper {
    #private;
    setExperimentEnabled(experiment: string, enabled: boolean): Promise<void>;
    enableExperiment(experiment: string): Promise<void>;
    delayPromisesIfRequired(): Promise<void>;
    throttleCPUIfRequired(): Promise<void>;
    setDevToolsSetting(settingName: string, value: string | boolean): Promise<void>;
    setDockingSide(side: string): Promise<void>;
    ensureReadyForTesting(): Promise<void>;
    useSoftMenu(): Promise<void>;
    /**
     * Get a single element handle. Uses `pierce` handler per default for piercing Shadow DOM.
     */
    $<ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, root?: puppeteer.ElementHandle, handler?: string): Promise<puppeteer.ElementHandle<DeducedElementType<ElementType, Selector>>>;
    performActionOnSelector(selector: string, options: {
        root?: puppeteer.ElementHandle;
    }, action: Action): Promise<puppeteer.ElementHandle>;
    waitFor<ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope, handler?: string): Promise<puppeteer.ElementHandle<DeducedElementType<ElementType, Selector>>>;
    /**
     * Schedules a task in the frontend page that ensures that previously
     * handled tasks have been handled.
     */
    drainFrontendTaskQueue(): Promise<void>;
    waitForFunction<T>(fn: () => Promise<T | undefined>, asyncScope?: AsyncScope, description?: string): Promise<NonNullable<Awaited<T>>>;
    timeout(duration: number): Promise<void>;
    typeText(text: string): Promise<void>;
    pressKey(key: puppeteer.KeyInput, modifiers?: {
        control?: boolean;
        alt?: boolean;
        shift?: boolean;
    }): Promise<void>;
    click(selector: string, options?: ClickOptions): Promise<puppeteer.ElementHandle<Element>>;
    hover(selector: string, options?: {
        root?: puppeteer.ElementHandle;
    }): Promise<puppeteer.ElementHandle<Element>>;
    waitForAria<ElementType extends Element = Element>(selector: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope): Promise<puppeteer.ElementHandle<DeducedElementType<ElementType, string>>>;
    waitForNone(selector: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope, handler?: string): Promise<boolean>;
    /**
     * Get multiple element handles. Uses `pierce` handler per default for piercing Shadow DOM.
     */
    $$<ElementType extends Element | null = null, Selector extends string = string>(selector: Selector, root?: puppeteer.JSHandle, handler?: string): Promise<puppeteer.ElementHandle<DeducedElementType<ElementType, Selector>>[]>;
    /**
     * @deprecated This method is not able to recover from unstable DOM. Use click(selector) instead.
     */
    clickElement(element: puppeteer.ElementHandle, options?: ClickOptions): Promise<void>;
    waitForElementWithTextContent(textContent: string, root?: puppeteer.ElementHandle, asyncScope?: AsyncScope): Promise<puppeteer.ElementHandle<Element>>;
    scrollElementIntoView(selector: string, root?: puppeteer.ElementHandle): Promise<void>;
}
export interface DevtoolsSettings {
    enabledDevToolsExperiments: string[];
    devToolsSettings: {
        [key: string]: string | boolean;
    };
    dockingMode: string;
}
export declare const DEFAULT_DEVTOOLS_SETTINGS: {
    enabledDevToolsExperiments: never[];
    devToolsSettings: {
        isUnderTest: boolean;
    };
    dockingMode: string;
};
export declare function setupDevToolsPage(context: puppeteer.BrowserContext, settings: DevtoolsSettings): Promise<DevToolsPage>;
export {};
