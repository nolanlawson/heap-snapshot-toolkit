const mod: (a: number, n: number) => number;
declare function assert<T>(predicate: T, message?: string): asserts predicate;
type Keys<T> = T extends T ? keyof T : never;
type RequiredKeys<T> = {
    [K in keyof T]-?: Record<string | number | symbol, unknown> extends Pick<T, K> ? never : K;
}[keyof T];
type OptionalKeys<T> = {
    [K in keyof T]-?: Record<string | number | symbol, unknown> extends Pick<T, K> ? K : never;
}[keyof T];
export type DeepImmutable<T> = {
    readonly [K in keyof T]: DeepImmutable<T[K]>;
};
type DeepMutable<T> = {
    -readonly [K in keyof T]: DeepMutable<T[K]>;
};
type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<Exclude<T[K], undefined>>;
};
type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};
const deepFreeze: <T extends object>(object: T) => DeepImmutable<T>;
class InsertAssignment<T> {
    value: T;
    constructor(value: T);
}
class ArrayAssignments<T> {
    value: {
        [n: number]: T;
    };
    constructor(value: {
        [n: number]: T;
    });
}
type Assignments<T> = T extends Readonly<Array<infer R>> ? R[] | ArrayAssignments<Assignments<R> | InsertAssignment<R>> : {
    [K in keyof T]: Assignments<T[K]>;
};
const immutableDeepAssign: <T>(object: DeepImmutable<T>, assignments: DeepImmutable<DeepPartial<Assignments<T>>>) => DeepImmutable<T>;
