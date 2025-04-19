# heap-snapshot-parser

A tool for parsing Chromium heap snapshot (`*.heapsnapshot`) files and doing useful things with them.

This package mostly re-exports code from [the Chromium DevTools frontend](https://github.com/ChromeDevTools/devtools-frontend). You can refer to that project for the original source.

The goal is to have a way to analyze and diff heap snapshots in any JavaScript environment, including the browser and Node.js

## Usage

Parse a heap snapshot file from disk:

```js
import { parse } from 'heap-snapshot-parser'

const parsedHeapSnapshot = await parse(fs.readStream('path/to/my.heapsnapshot', 'utf-8'))
```

You can either pass in a Node.js [`ReadStream`](https://nodejs.org/api/fs.html#class-fsreadstream), or a standard [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)

Passing in a file directly is not recommended, since heap snapshot files can be quite large. But if you really must:

```js
import { Readable } from 'node:stream'
import { parse } from 'heap-snapshot-parser'

const string = fs.readFileSync('path/to/my.heapsnapshot', 'utf-8')

const stream = new Readable()
stream.push(string)
stream.push(null)

const parsedHeapSnapshot = parse(stream)
```

## Build