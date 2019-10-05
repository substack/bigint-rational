var compare = require('./compare.js')

module.exports = function lte (a, b) {
  return compare(a,b) <= 0
}
