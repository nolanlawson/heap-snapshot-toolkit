export declare function playMediaFile(media: string): Promise<void>;
export declare function getPlayerButton(): Promise<import("puppeteer-core").ElementHandle<Element>>;
export declare function getPlayerErrors(count: number): Promise<import("puppeteer-core").ElementHandle<Element>[]>;
export declare function getPlayerButtonText(): Promise<string>;
export declare function waitForPlayerButtonTexts(count: number): Promise<import("puppeteer-core").ElementHandle<Element>[]>;
