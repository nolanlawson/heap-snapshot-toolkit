export declare function waitForTheCoveragePanelToLoad(): Promise<void>;
export declare function navigateToCoverageTestSite(): Promise<void>;
export declare function startInstrumentingCoverage(): Promise<void>;
export declare function stopInstrumentingCoverage(): Promise<void>;
export declare function clearCoverageContent(): Promise<void>;
export declare function getCoverageData(expectedCount: number): Promise<{
    url: string | null | undefined;
    total: string | null | undefined;
    unused: string | null | undefined;
}[]>;
