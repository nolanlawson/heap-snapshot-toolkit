interface ArtifactGroup {
    [key: string]: {
        filePath: string;
    };
}
export declare class ScreenshotError extends Error {
    static readonly SUMMARY_LENGTH_CUTOFF = 3900;
    static errors: ScreenshotError[];
    readonly screenshots: ArtifactGroup;
    private constructor();
    /**
     * Creates a ScreenshotError when a reference golden does not exists.
     */
    static fromMessage(message: string, generatedImgPath: string): ScreenshotError;
    /**
     * Creates a ScreenshotError when a generated screenshot is different from
     * the golden.
     */
    static fromError(error: Error, goldenImgPath: string, generatedImgPath: string, diffImgPath: string): ScreenshotError;
    /**
     * Creates a ScreenshotError an unexpected error occurs. Screenshots are
     * were taken for both the target and the frontend.
     */
    static fromBase64Images(error: Error, targetScreenshot?: string, frontendScreenshot?: string): Error;
    /**
     * Costructs artifact group and summary for Milo
     * at resultdb publication time.
     */
    toMiloArtifacts(): [ArtifactGroup, string];
    /**
     * Copy artifacts in tmp folder so they remain available
     * at resultdb publication time.
     */
    private static stashArtifact;
    /**
     * Save base64 image in tmp folder to make it available at resultdb
     * publication time.
     */
    private static saveArtifact;
}
export {};
