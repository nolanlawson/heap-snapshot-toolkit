import * as Common from '../../core/common/common.js';
class WorkerMainImpl implements Common.Runnable.Runnable {
    static instance(opts?: {
        forceNew: boolean | null;
    }): WorkerMainImpl;
    run(): Promise<void>;
}
