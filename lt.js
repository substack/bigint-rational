var compare = require('./compare.js')

module.exports = function lt (a, b) {
  return compare(a,b) < 0
}
