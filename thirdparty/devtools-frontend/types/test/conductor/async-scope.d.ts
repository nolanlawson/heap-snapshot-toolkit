export declare class AsyncScope {
    static scopes: Set<AsyncScope>;
    static abortSignal: AbortSignal;
    private asyncStack;
    get descriptions(): string[];
    get stack(): null | string[];
    push(description?: string): void;
    pop(): void;
    exec<T>(callable: () => Promise<T>, description?: string): Promise<T>;
    execSync<T>(callable: () => T, description?: string): T;
}
