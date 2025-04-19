export declare function openChangesPanelAndNavigateTo(testName: string): Promise<void>;
export declare function getChangesList(): Promise<string[]>;
export declare function waitForNewChanges(initialChanges: string[]): Promise<boolean>;
export declare function veImpressionForChangesPanel(): {
    impressions: string[];
};
