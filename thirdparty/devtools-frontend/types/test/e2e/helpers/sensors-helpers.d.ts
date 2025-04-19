import type { ElementHandle } from 'puppeteer-core';
export declare function setCustomOrientation(): Promise<void>;
export declare function getInputFieldValue(field: ElementHandle<Element>): Promise<string>;
export declare function getOrientationInputs(): Promise<ElementHandle<HTMLInputElement>[]>;
export declare function getOrientationValues(): Promise<number[]>;
