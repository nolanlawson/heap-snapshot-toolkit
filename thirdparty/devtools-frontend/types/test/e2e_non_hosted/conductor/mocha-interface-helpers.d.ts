import type * as Mocha from 'mocha';
export declare function screenshotError(state: E2E.State, error: Error): Promise<any>;
export declare function makeInstrumentedTestFunction(fn: Mocha.AsyncFunc, label: string): (this: Mocha.Context) => Promise<unknown>;
