# heap-snapshot-toolkit

Tools for parsing Chromium heap snapshot (`*.heapsnapshot`) files and doing useful things with them.

This package mostly re-exports code from [the Chromium DevTools frontend](https://github.com/ChromeDevTools/devtools-frontend). You can refer to that project for the original source.

The goal is to have a way to analyze and diff heap snapshots in any JavaScript environment, including the browser and Node.js

## Installation

```sh
npm install heap-snapshot-toolkit
```

## Usage

### Parsing

Parse a heap snapshot file from disk:

```js
import {createReadStream } from 'node:fs'
import { parse } from 'heap-snapshot-toolkit'

const parsedHeapSnapshot = await parse(createReadStream('path/to/my.heapsnapshot', 'utf-8'))
```

You can either pass in a Node.js [`ReadStream`](https://nodejs.org/api/fs.html#class-fsreadstream), or a standard [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)

Passing in a file directly is not recommended, since heap snapshot files can be quite large. But if you really must:

```js
import {readFileSync } from 'node:fs'
import { Readable } from 'node:stream'
import { parse } from 'heap-snapshot-toolkit'

const string = readFileSync('path/to/my.heapsnapshot', 'utf-8')
const stream = new Readable()
stream.push(string)
stream.push(null)

const parsedHeapSnapshot = parse(stream)
```

### Analyzing

What can you do with the parsed heap snapshot? You can look at its statistics:

```js
console.log(parsedHeapSnapshot.getStatistics()) 
```

This might log something like:

```json
{
  "total": 352312,
  "native": {
    "total": 11568,
    "typedArrays": 0
  },
  "v8heap": {
    "total": 340744,
    "code": 20840,
    "jsArrays": 512,
    "strings": 5156,
    "system": 140576
  }
}
```

The exact output is determined by the internals of the Chromium DevTools frontend.

### Diff

You can also diff two snapshots using the `diff()` method:

```js
import {createReadStream } from 'node:fs'
import { parse, diff } from 'heap-snapshot-toolkit'

const startSnapshot = parse(createReadStream('path/to/start.heapsnapshot', 'utf-8'))
const endSnapshot = parse(createReadStream('path/to/end.heapsnapshot', 'utf-8'))

const snapshotDiff = diff(startSnapshot, endSnapshot)
```

This will return an object where the keys are unique classes and the values are information about the diff. For example:

```js
console.log(snapshotDiff[',Array'])
```

This might log something like:

```json
{
  "name": "Foo",
  "addedCount": 1,
  "removedCount": 0,
  "addedSize": 52,
  "removedSize": 0,
  "deletedIndexes": [],
  "addedIndexes": [
    86316
  ],
  "countDelta": 1,
  "sizeDelta": 52
}
```

Note that the keys are unique strings determined by the Chromium DevTools frontend. In short, the key is a combination
of the class name and the code positions, in order to distinguish object classes with the same name. For instance,
`1,2,3,Foo` would be a different class than `4,5,6,Foo`. For readability, you can find the shorter name in the
`aggregatesWithFilter` output:

```js
console.log(snapshot.aggregatesWithFilter({}))
```

This might log something like:

```js
{
  // ...
  ",Array": {
    "count": 2,
    "distance": 3,
    "self": 384,
    "maxRet": 4072,
    "name": "Array",
    "idxs": [
      76026,
      89142
    ]
  },
  // ...
}
```

You can also use the `diffFromStreams()` API to diff from two `ReadStream`/`ReadableStream`s. This is useful if you want to avoid using too
much memory by reading in two entire heap snapshot files at once. `diffFromStreams()` will efficiently read in the start
snapshot, create a minimal object for diffing, read in the end snapshot, and then create the diff.

In this mode, `diffFromStreams()` is an [async iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator)
which emits 3 events: one for the start snapshot, one for the end snapshot, and one for the final diff.

```js
import {createReadStream } from 'node:fs'
import { diffFromStreams } from 'heap-snapshot-toolkit'

const startStream = createReadStream('path/to/start.heapsnapshot', 'utf-8')
const endStream = createReadStream('path/to/end.heapsnapshot', 'utf-8')

const iterator = diffFromStreams(startStream, endStream)
for await (const item of iterator) {
  if (item.type === 'start') {
    console.log(item.result) // start snapshot
  } else if (item.type === 'end') {
    console.log(item.result) // end snapshot
  } else if (item.type === 'diff') {
    console.log(item.result) // diff snapshot
  }
}
```

## `DevToolsAPI`

Note that this package doesn't make much attempt to paper over the Chromium DevTools APIs. You may have to dig
around in the generated objects if there is something particular you want to do.

All important DevTools APIs are also exported in case you need them:

```js
import { DevToolsAPI } from 'heap-snapshot-toolkit'
console.log(DevToolsAPI)
```

## Contributing

### Build from `devtools-frontend`

Clone `devtools-frontend` in a sibling directory from 
[the Chromium DevTools frontend source code](https://github.com/ChromeDevTools/devtools-frontend). Then run:

```sh
pnpm build
```

### Lint

```sh
pnpm lint
```

### Test

```sh
pnpm test
```