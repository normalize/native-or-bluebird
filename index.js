
module.exports = require('./promise')

/* istanbul ignore next */
if (!module.exports) {
  console.error('%s require `Promise`', module.parent.filename)
  console.error('But neither `bluebird` nor the native `Promise` functions were found.')
  console.error('Please install `bluebird` yourself.')
  process.exit(1)
}
