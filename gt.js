var compare = require('./compare.js')

module.exports = function gt (a, b) {
  return compare(a,b) > 0
}
