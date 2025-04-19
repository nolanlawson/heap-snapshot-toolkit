import { disposeSymbol } from './disposable.js';
/**
 * @internal
 */
export declare class Mutex {
    #private;
    static Guard: {
        new (mutex: Mutex, onRelease?: () => void): {
            "__#1129@#mutex": Mutex;
            "__#1129@#onRelease"?: (() => void) | undefined;
            [Symbol.dispose](): void;
        };
    };
    acquire(onRelease?: () => void): Promise<InstanceType<typeof Mutex.Guard>>;
    release(): void;
}
