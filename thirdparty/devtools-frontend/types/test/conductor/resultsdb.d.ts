export interface TestResult {
    testId: SanitizedTestId;
    expected?: boolean;
    status?: 'PASS' | 'FAIL' | 'SKIP';
    summaryHtml?: string;
    duration?: string;
    tags?: Array<{
        key: string;
        value: string;
    }>;
    artifacts?: {
        [key: string]: {
            filePath: string;
        };
    };
}
export type SanitizedTestId = string & {
    _sanitizedTag?: string;
};
export declare function sanitizedTestId(rawTestId: string): SanitizedTestId;
export declare function available(): boolean;
export declare function sendTestResult(results: TestResult): void;
