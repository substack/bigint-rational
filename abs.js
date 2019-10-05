var bn = require('./lib/bn.js')

module.exports = function abs (out, x) {
  out[0] = bn.abs(x[0])
  out[1] = bn.abs(x[1])
  return out
}
