import {HeapSnapshotLoader} from "./thirdparty/devtools-frontend"

export async function parse (readStream) {
    const loader = new HeapSnapshotLoader.HeapSnapshotLoader()
    const readStreamPromise = new Promise((resolve, reject) => {
        readStream.on('error', reject)
        readStream.on('end', () => resolve())
        readStream.on('data', chunk => {
            loader.write(chunk)
        })
    })
    await readStreamPromise

    loader.close()
    await loader.parsingComplete

    // Pattern borrowed from `createJSHeapSnapshotForTesting` in Chromium code.
    // https://github.com/ChromeDevTools/devtools-frontend/blob/866e7ab/front_end/entrypoints/heap_snapshot_worker/HeapSnapshot.ts#L3675-L3682
    // Rather than trying to make it work with two workers, we just do it all in one thread.
    // For context see this commit splitting the work into two workers:
    // https://github.com/ChromeDevTools/devtools-frontend/commit/6a523a7
    const channel = new MessageChannel()
    try {
        // eslint-disable-next-line no-new
        new SecondaryInitManager(channel.port2)
        return await loader.buildSnapshot(channel.port1)
    } finally {
        // Without this, the Node process will just hang forever
        channel.port1.close()
        channel.port2.close()
    }
}