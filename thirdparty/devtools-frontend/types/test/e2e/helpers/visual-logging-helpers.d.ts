import type { DevToolsPage } from '../../e2e_non_hosted/shared/frontend-helper.js';
interface TestImpressionLogEntry {
    impressions: string[];
}
type TestLogEntry = TestImpressionLogEntry | {
    interaction: string;
};
export declare function veImpressionsUnder(key: string, children: TestImpressionLogEntry[]): TestImpressionLogEntry;
export declare function veClick(ve: string): TestLogEntry;
export declare function veChange(ve: string): TestLogEntry;
export declare function veKeyDown(ve: string): TestLogEntry;
export declare function veResize(ve: string): TestLogEntry;
export declare function veImpression(ve: string, context?: string, children?: TestImpressionLogEntry[]): {
    impressions: string[];
};
export declare function veImpressionForMainToolbar(options?: {
    selectedPanel?: string;
    expectClosedPanels?: string[];
    dockable?: boolean;
}): {
    impressions: string[];
};
export declare function veImpressionForElementsPanel(options?: {
    dockable?: boolean;
}): {
    impressions: string[];
};
export declare function veImpressionForDrawerToolbar(options?: {
    selectedPanel?: string;
}): {
    impressions: string[];
};
export declare function dumpVeEvents(label: string): Promise<void>;
export declare function expectVeEvents(expectedEvents: TestLogEntry[], root?: string, devToolsPage?: DevToolsPage): Promise<void>;
export {};
