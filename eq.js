var compare = require('./compare.js')

module.exports = function eq (a, b) {
  return compare(a,b) === 0
}
