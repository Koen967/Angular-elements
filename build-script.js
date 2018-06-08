const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files = [
    './dist/angularElements/runtime.js',
    './dist/angularElements/polyfills.js',
    './dist/angularElements/main.js'
  ]

  await fs.ensureDir('elements')

  await concat(files, 'elements/counter.js')
  console.info('Elements created successfully!')

})()
