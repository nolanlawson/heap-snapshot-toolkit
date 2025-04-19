import { expect } from 'chai'
import { createGunzip } from 'node:zlib'
import { describe, it } from 'node:test'
import { createReadStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { makeDefaultReadableStreamFromNodeReadable } from 'node-readable-to-web-readable-stream'
import { diff, parse, DevToolsAPI, diffFromStreams } from '../index.js'

function fileToReadStream (filename) {
  const fileStream = createReadStream(filename)
  const gunzip = createGunzip()
  pipeline(fileStream, gunzip, err => { if (err) { console.error(err) } })
  gunzip.setEncoding('utf-8')
  return gunzip
}

const expectedStatistics = {
  total: 352312,
  native: { total: 11568, typedArrays: 0 },
  v8heap: {
    total: 340744,
    code: 20840,
    jsArrays: 512,
    strings: 5156,
    system: 140576
  }
}

const expectedStatistics2 = {
  total: 353421,
  native: {
    total: 11568,
    typedArrays: 0
  },
  v8heap: {
    total: 341853,
    code: 21204,
    jsArrays: 512,
    strings: 5501,
    system: 140560
  }
}

const expectedDiff = {
  name: 'Foo',
  addedCount: 1,
  removedCount: 0,
  addedSize: 52,
  removedSize: 0,
  deletedIndexes: [],
  addedIndexes: [
    86316
  ],
  countDelta: 1,
  sizeDelta: 52
}

describe('basic test suite', () => {
  it('can parse heap snapshots - ReadStream', async () => {
    const stream = fileToReadStream('./test/fixtures/snapshot1.heapsnapshot.gz')
    const parsed = await parse(stream)
    const statistics = parsed.getStatistics()
    expect(statistics).to.deep.equal(expectedStatistics)
  })

  it('can parse heap snapshots - ReadableStream', async () => {
    const stream = makeDefaultReadableStreamFromNodeReadable(fileToReadStream('./test/fixtures/snapshot1.heapsnapshot.gz'))
    const parsed = await parse(stream)
    const statistics = parsed.getStatistics()
    expect(statistics).to.deep.equal(expectedStatistics)
  })

  it('can diff heap snapshots - diff()', async () => {
    const parsed1 = await parse(fileToReadStream('./test/fixtures/snapshot1.heapsnapshot.gz'))
    const parsed2 = await parse(fileToReadStream('./test/fixtures/snapshot2.heapsnapshot.gz'))

    const diffed = await diff(parsed1, parsed2)

    // I created a `new Foo()` object in the second heap snapshot VM for testing
    expect(diffed['3,1,0,Foo']).to.deep.equal(expectedDiff)
  })

  it('can diff heap snapshots - diffFromStreams()', async () => {
    const stream1 = fileToReadStream('./test/fixtures/snapshot1.heapsnapshot.gz')
    const stream2 = fileToReadStream('./test/fixtures/snapshot2.heapsnapshot.gz')

    const iterator = diffFromStreams(stream1, stream2)

    for await (const item of iterator) {
      if (item.type === 'start') {
        // start snapshot
        expect(item.result.getStatistics()).to.deep.equal(expectedStatistics)
      } else if (item.type === 'end') {
        // end snapshot
        expect(item.result.getStatistics()).to.deep.equal(expectedStatistics2)
      } else if (item.type === 'diff') {
        // diff
        expect(item.result['3,1,0,Foo']).to.deep.equal(expectedDiff)
      }
    }
  })

  it('re-exports devtools APIs', () => {
    expect(Object.keys(DevToolsAPI)).to.deep.equal(['HeapSnapshotLoader', 'HeapSnapshotModel', 'SecondaryInitManager'])
  })
})
