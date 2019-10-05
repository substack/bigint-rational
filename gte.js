var compare = require('./compare.js')

module.exports = function gte (a, b) {
  return compare(a,b) >= 0
}
