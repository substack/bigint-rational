var bn = require('./lib/bn.js')

module.exports = function min (out, ...args) {
  var minN = args[0][0], minD = args[0][1]
  var minDAbs = bn.abs(minD), minDSign = bn.sign(minD)
  for (var i = 1; i < args.length; i++) {
    var n = args[i][0], d = args[i][1]
    var dSign = bn.sign(d), dAbs = bn.abs(d)
    if (n * minDAbs * dSign < minN * dAbs * minDSign) {
      minN = n
      minD = d
      minDAbs = dAbs
      minDSign = dSign
    }
  }
  out[0] = minN
  out[1] = minD
  return out
}
