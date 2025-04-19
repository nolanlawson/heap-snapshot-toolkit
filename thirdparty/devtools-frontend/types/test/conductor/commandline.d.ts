import type * as Yargs from 'yargs';
export declare enum DiffBehaviors {
    UPDATE = "update",
    THROW = "throw",
    NO_THROW = "no-throw",
    NO_UPDATE = "no-update"
}
export declare function asArray(value: undefined | string | string[]): string[];
export declare function commandLineArgs<T = Record<string, unknown>>(yargs: Yargs.Argv<T>): Yargs.Argv<T & {
    debug: boolean;
} & {
    headless: boolean;
} & {
    coverage: boolean;
} & {
    repeat: number;
} & {
    "artifacts-dir": string | undefined;
} & {
    "chrome-binary": string | undefined;
} & {
    "on-diff": string[] | undefined;
} & {
    shuffle: boolean;
} & {
    retries: number;
} & {
    grep: string | undefined;
} & {
    fgrep: string | undefined;
} & {
    "invert-grep": boolean | undefined;
}>;
