import { expect } from 'chai'
import { createGunzip } from 'node:zlib'
import { describe, it } from 'node:test'
import { createReadStream } from 'node:fs'
import { pipeline } from 'node:stream'

import { diff, parse, DevToolsAPI } from '../index.js'

function fileToReadStream (filename) {
  const fileStream = createReadStream(filename)
  const gunzip = createGunzip()
  pipeline(fileStream, gunzip, err => { if (err) { console.error(err) } })
  gunzip.setEncoding('utf-8')
  return gunzip
}

describe('basic test suite', () => {
  it('can parse heap snapshots', async () => {
    const parsed = await parse(fileToReadStream('./test/fixtures/snapshot1.heapsnapshot.gz'))
    const statistics = parsed.getStatistics()
    expect(statistics).to.deep.equal({
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
    )
  })

  it('can diff heap snapshots', async () => {
    const parsed1 = await parse(fileToReadStream('./test/fixtures/snapshot1.heapsnapshot.gz'))
    const parsed2 = await parse(fileToReadStream('./test/fixtures/snapshot2.heapsnapshot.gz'))

    const diffed = await diff(parsed1, parsed2)

    // I created a `new Foo()` object in the second heap snapshot VM for testing
    expect(diffed['3,1,0,Foo']).to.deep.equal({
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
    })
  })

  it('re-exports devtools APIs', () => {
    expect(Object.keys(DevToolsAPI)).to.deep.equal(['HeapSnapshotLoader', 'HeapSnapshotModel', 'SecondaryInitManager'])
  })
})
