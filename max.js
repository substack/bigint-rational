var bn = require('./lib/bn.js')

module.exports = function max (out, ...args) {
  var maxN = args[0][0], maxD = args[0][1]
  var maxDAbs = bn.abs(maxD), maxDSign = bn.sign(maxD)
  for (var i = 1; i < args.length; i++) {
    var n = args[i][0], d = args[i][1]
    var n = args[i][0], d = args[i][1]
    var dSign = bn.sign(d), dAbs = bn.abs(d)
    if (n * maxDAbs * dSign > maxN * dAbs * maxDSign) {
      maxN = n
      maxD = d
      maxDAbs = dAbs
      maxDSign = dSign
    }
  }
  out[0] = maxN
  out[1] = maxD
  return out
}
