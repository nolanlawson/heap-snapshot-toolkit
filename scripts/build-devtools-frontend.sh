#!/usr/bin/env bash

set -e
set -x

# build devtools-frontend with rollup
cd ../devtools-frontend
node --max-old-space-size=4096 ../heap-snapshot-toolkit/node_modules/rollup/dist/bin/rollup \
    --config ../heap-snapshot-toolkit/scripts/devtools.rollup.config.js

# remove unused js/tsbuildinfo files
cd ../heap-snapshot-toolkit
rm -fr thirdparty/devtools-frontend/{front_end,inspector_overlay,test,tsconfig.tsbuildinfo}

# remove unused .d.ts files since devtools-frontend has a lot
echo '{ "include": ["index.js", "thirdparty"], "compilerOptions": { "checkJs": true } }' > tsconfig.json
npx tsr --include-d-ts --write 'index\.js$'
rm -f tsconfig.json
