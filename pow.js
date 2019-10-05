var bn = require('./lib/bn.js')

module.exports = function pow (out, x, p) {
  var n = x[0], d = x[1]
  if (p < 0n) {
    var pAbs = bn.abs(p)
    out[0] = d ** pAbs
    out[1] = n ** pAbs
  } else {
    out[0] = n ** p
    out[1] = d ** p
  }
  return out
}
