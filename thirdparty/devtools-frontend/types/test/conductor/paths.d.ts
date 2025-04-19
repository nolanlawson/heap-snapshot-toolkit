export declare const SOURCE_ROOT: string;
export declare const CHECKOUT_ROOT: string;
export declare const BUILD_ROOT: string;
export declare const GEN_DIR: string;
export declare const BUILD_WITH_CHROMIUM: any;
export declare function rebase(fromRoot: string, toRoot: string, filename: string, newExt?: string): string;
export declare function isContainedInDirectory(contained: string, directory: string): boolean;
export declare class PathPair {
    readonly sourcePath: string;
    readonly buildPath: string;
    protected constructor(sourcePath: string, buildPath: string);
    static get(pathname: string): PathPair | null;
}
export declare function defaultChromePath(): string;
