import type * as Mocha from 'mocha';
declare global {
    let itScreenshot: {
        (title: string, fn: Mocha.AsyncFunc): void;
        skip: (title: string, fn: Mocha.AsyncFunc) => void;
        skipOnPlatforms: (platforms: Platform[], title: string, fn: Mocha.AsyncFunc) => void;
    };
    namespace Mocha {
        interface TestFunction {
            skipOnPlatforms: (platforms: Platform[], title: string, fn: Mocha.AsyncFunc) => void;
        }
    }
}
export type Platform = 'mac' | 'win32' | 'linux';
export declare let platform: Platform;
export declare function makeInstrumentedTestFunction(fn: Mocha.AsyncFunc, label: string): (this: Mocha.Context) => Promise<unknown>;
