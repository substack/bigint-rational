var bn = require('./lib/bn.js')

module.exports = function compare (a, b) {
  var x = a[0] * bn.abs(b[1]) * bn.sign(a[1])
  var y = b[0] * bn.abs(a[1]) * bn.sign(b[1])
  if (x === y) return 0
  return x < y ? -1 : +1
}
