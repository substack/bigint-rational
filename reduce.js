var bn = require('./lib/bn.js')

module.exports = function reduce (out, x) {
  var n = bn.abs(x[0])
  var d = bn.abs(x[1])
  var g = gcd(n,d)
  out[0] = n * bn.sign(x[0]) * bn.sign(x[1]) / g
  out[1] = d / g
  return out
}
function gcd (a, b) {
  if (b === 0n) return a
  return gcd(b, a % b)
}
