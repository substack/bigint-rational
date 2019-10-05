exports.create = function create (n, d) {
  var bn = typeof n === 'bigint' ? n : BigInt(n)
  var bd = typeof d === 'bigint' ? d : BigInt(d)
  return [bn,bd]
}

exports.clone = function clone (x) {
  return [x[0],x[1]]
}

exports.copy = function (out, x) {
  out[0] = x[0]
  out[1] = x[1]
  return out
}

exports.set = function set (out, x, y) {
  var n = typeof x === 'bigint' ? x : BigInt(x)
  var d = typeof y === 'bigint' ? y : BigInt(y)
  out[0] = n
  out[1] = d
  return out
}

exports.eq = function eq (a, b) {
  return compare(a,b) === 0
}

exports.lt = function lt (a, b) {
  return compare(a,b) < 0
}

exports.lte = function lte (a, b) {
  return compare(a,b) <= 0
}

exports.gt = function gt (a, b) {
  return compare(a,b) > 0
}

exports.gte = function gte (a, b) {
  return compare(a,b) >= 0
}

exports.compare = compare
function compare (a, b) {
  var x = a[0] * bnAbs(b[1]) * bnSign(a[1])
  var y = b[0] * bnAbs(a[1]) * bnSign(b[1])
  if (x === y) return 0
  return x < y ? -1 : +1
}

exports.add = function add (out, a, b) {
  out[0] = a[0] * b[1] + b[0] * a[1]
  out[1] = a[1] * b[1]
  return out
}

exports.subtract = function subtract (out, a, b) {
  out[0] = a[0] * b[1] - b[0] * a[1]
  out[1] = a[1] * b[1]
  return out
}

exports.multiply = function multiply (out, a, b) {
  out[0] = a[0] * b[0]
  out[1] = a[1] * b[1]
  return out
}

exports.divide = function divide (out, a, b) {
  var b0 = b[0], b1 = b[1]
  out[0] = a[0] * b1
  out[1] = a[1] * b0
  return out
}

exports.abs = function abs (out, x) {
  out[0] = bnAbs(x[0])
  out[1] = bnAbs(x[1])
  return out
}

exports.negate = function negate (out, x) {
  out[0] = -x[0] * bnSign(x[1])
  out[1] = bnAbs(x[1])
  return out
}

exports.sign = function sign (x) {
  return bnSign(x[0]) * bnSign(x[1])
}

exports.inverse = function inverse (out, x) {
  var n = x[0], d = x[1]
  if (n < 0n) {
    out[0] = -d
    out[1] = -n
  } else {
    out[0] = d
    out[1] = n
  }
  return out
}

exports.pow = function pow (out, x, n) {
  out[0] = x[0] ** n
  out[1] = x[1] ** n
  return out
}

exports.min = function min (out, ...args) {
  var minN = args[0][0], minD = args[0][1]
  var minDAbs = bnAbs(minD), minDSign = bnSign(minD)
  for (var i = 1; i < args.length; i++) {
    var n = args[i][0], d = args[i][1]
    var dSign = bnSign(d), dAbs = bnAbs(d)
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

exports.max = function max (out, ...args) {
  var maxN = args[0][0], maxD = args[0][1]
  var maxDAbs = bnAbs(maxD), maxDSign = bnSign(maxD)
  for (var i = 1; i < args.length; i++) {
    var n = args[i][0], d = args[i][1]
    var n = args[i][0], d = args[i][1]
    var dSign = bnSign(d), dAbs = bnAbs(d)
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

exports.simplify = function simplify (out, x) {
  var n = bnAbs(x[0])
  var d = bnAbs(x[1])
  var g = gcd(n,d)
  out[0] = n * bnSign(x[0]) * bnSign(x[1]) / g
  out[1] = d / g
  return out
}

function bnAbs (x) { return x < 0n ? -x : x }
function bnSign (x) { return x === 0n ? 0n : (x < 0n ? -1n : 1n) }

function gcd (a, b) {
  if (b === 0n) return a
  return gcd(b, a % b)
}

function lcm (a, b) {
  if (b === 0n) return 0n
  return a * b / gcd(a, b)
}
