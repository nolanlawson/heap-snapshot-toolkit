import { HeapSnapshotLoader, SecondaryInitManager } from './thirdparty/devtools-frontend/index.js'
export * as DevToolsAPI from './thirdparty/devtools-frontend/index.js'

export async function parse (readStream) {
  const loader = new HeapSnapshotLoader.HeapSnapshotLoader()
  if (readStream instanceof ReadableStream) {
    // standard JS ReadableStream
    for await (const chunk of readStream) {
      loader.write(chunk)
    }
  } else {
    // assume Node ReadStream
    await new Promise((resolve, reject) => {
      readStream.on('error', reject)
      readStream.on('end', () => resolve())
      readStream.on('data', chunk => {
        loader.write(chunk)
      })
    })
  }

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

async function getAggregatesForDiff (snapshot) {
  // For reference see:
  // https://github.com/ChromeDevTools/devtools-frontend/blob/898fd09/front_end/panels/profiler/HeapSnapshotDataGrids.ts#L999-L1016
  const interfaceDefinitions = await snapshot.interfaceDefinitions()
  const aggregatesForDiff = await snapshot.aggregatesForDiff(interfaceDefinitions)
  return aggregatesForDiff
}

export async function diff (startSnapshot, endSnapshot) {
  const startSnapshotUid = startSnapshot.uid
  const aggregatesForDiff = await getAggregatesForDiff(startSnapshot)
  return await endSnapshot.calculateSnapshotDiff(startSnapshotUid, aggregatesForDiff)
}

export async function * diffFromStreams (startStream, endStream) {
  // Read in snapshots serially to avoid using too much memory at once
  let startSnapshot = await parse(startStream)
  yield { type: 'start', result: startSnapshot }

  const startSnapshotUid = startSnapshot.uid
  const aggregatesForDiff = await getAggregatesForDiff(startSnapshot)
  startSnapshot = undefined // free memory

  const endSnapshot = await parse(endStream)
  yield { type: 'end', result: endSnapshot }

  const diff = await endSnapshot.calculateSnapshotDiff(startSnapshotUid, aggregatesForDiff)
  yield { type: 'diff', result: diff }
}
