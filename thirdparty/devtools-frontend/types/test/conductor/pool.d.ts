import type * as puppeteer from 'puppeteer-core';
import { DevToolsFrontendTab } from './frontend_tab.js';
import { TargetTab } from './target_tab.js';
interface FrontendTargetTabs {
    frontend: DevToolsFrontendTab;
    target: TargetTab;
}
export interface FrontedTargetPoolOptions {
    browser: puppeteer.Browser;
    testServerPort: number;
    /**
     * Defaults to FrontendTargetPool.POOL_SIZE.
     * Setting `poolSize` to 0 will create target/frontend pairs on-demand.
     */
    poolSize?: number;
}
/**
 * A pool of DevTools frontend tab plus target tab pairs. Every time a pair
 * is taken from the pool, the pool will automatically prepare another pair.
 *
 * Tab pairs are not intended to be reused and its the consumer's responsibility
 * to clean them up properly.
 */
export declare class FrontendTargetPool {
    #private;
    private static readonly POOL_SIZE;
    private constructor();
    /** Returns a pool with `options.poolSize` tab pairs ready to go. */
    static create(options: FrontedTargetPoolOptions): FrontendTargetPool;
    private addTabPairToPool;
    takeTabPair(): Promise<FrontendTargetTabs>;
}
/**
 * A simple Promise-based pool. Esentially a queue.
 *
 * When the pool is empty, consumers get a promise that resolves as soon as
 * the pool is refilled.
 */
export declare class Pool<T> {
    #private;
    put(value: T): void;
    take(): Promise<T>;
}
export {};
