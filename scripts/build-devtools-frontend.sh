#!/usr/bin/env bash

set -e
set -x

cd ../devtools-frontend

node ../heap-snapshot-parser/node_modules/rollup/dist/bin/rollup --config ../heap-snapshot-parser/scripts/devtools.rollup.config.js

cd ../heap-snapshot-parser
rm -fr src/thirdparty/devtools-frontend/{front_end,inspector_overlay,test}

npx tsr --include-d-ts --write 'index\.js$'