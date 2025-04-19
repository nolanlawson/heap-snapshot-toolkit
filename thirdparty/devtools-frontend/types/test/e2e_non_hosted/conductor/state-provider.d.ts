import type * as Mocha from 'mocha';
export declare class StateProvider {
    #private;
    static instance: StateProvider;
    static serverPort: number;
    private constructor();
    registerSettingsCallback(suite: Mocha.Suite, suiteSettings: E2E.SuiteSettings): void;
    callWithState(context: Mocha.Context, suite: Mocha.Suite, testFn: E2E.TestAsyncCallbackWithState): Promise<any>;
    resolveBrowser(suite: Mocha.Suite): Promise<void>;
    closeBrowsers(): Promise<void>;
}
export declare function mergeSettings(s1: E2E.SuiteSettings, s2: E2E.HarnessSettings): E2E.HarnessSettings;
