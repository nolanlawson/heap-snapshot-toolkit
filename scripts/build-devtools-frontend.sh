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

# fix for this class that isn't properly exported by rollup-plugin-typescript for some reason
for file in $(grep -lr CSSInJS thirdparty/devtools-frontend/types); do
  echo "export type CSSInJS = string&{_tag: 'CSS-in-JS'}" >> "${file}"
done

# bundle the remaining .d.ts files
npx api-extractor run

# delete unbundled .d.ts files
rm -fr ./thirdparty/devtools-frontend/types
