export declare const enum ServerType {
    HOSTED_MODE = "hosted-mode",
    COMPONENT_DOCS = "component-docs"
}
interface Config {
    tests: string[];
    artifactsDir: string;
    chromeBinary: string;
    serverType: ServerType;
    debug: boolean;
    headless: boolean;
    coverage: boolean;
    repetitions: number;
    onDiff: {
        update: boolean | string[];
        throw: boolean;
    };
    shuffle: boolean;
    mochaGrep: {
        invert?: boolean;
        grep?: string;
    } | {
        invert?: boolean;
        fgrep?: string;
    };
    copyScreenshotGoldens: boolean;
    retries: number;
    configureChrome: (executablePath: string) => void;
}
export declare const TestConfig: Config;
export declare function loadTests(testDirectory: string): string[];
export {};
