var bn = require('./lib/bn.js')

module.exports = function negate (out, x) {
  out[0] = -x[0] * bn.sign(x[1])
  out[1] = bn.abs(x[1])
  return out
}
