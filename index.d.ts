import {ReadStream} from 'node:fs'
import {
    JSHeapSnapshot, SecondaryInitManager
} from './thirdparty/devtools-frontend/types/front_end/entrypoints/heap_snapshot_worker/HeapSnapshot'
import {
    HeapSnapshotLoader
} from './thirdparty/devtools-frontend/types/front_end/entrypoints/heap_snapshot_worker/HeapSnapshotLoader'
import * as
    HeapSnapshotModel
 from './thirdparty/devtools-frontend/types/front_end/models/heap_snapshot_model/heap_snapshot_model.js'

export type JSHeapSnapshotDiff = {[name: string]: any}

/**
 * Parse a UTF-8 ReadStream or ReadableStream into a JSHeapSnapshot object.
 * @param readStream - ReadableStream | ReadStream
 */
export declare function parse (readStream: ReadableStream | ReadStream): Promise<JSHeapSnapshot>

/**
 * Diff two JSHeapSnapshots.
 * @param startSnapshot - JSHeapSnapshot
 * @param endSnapshot - JSHeapSnapshot
 */
export declare function diff(startSnapshot: JSHeapSnapshot, endSnapshot: JSHeapSnapshot): Promise<JSHeapSnapshotDiff>

/**
 * All heap snapshot-related DevTools APIs in case you need them for something.
 */
export declare const DevToolsAPI: {
    HeapSnapshotLoader: HeapSnapshotLoader,
    HeapSnapshotModel: typeof HeapSnapshotModel,
    SecondaryInitManager: SecondaryInitManager
}