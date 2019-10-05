module.exports = function inverse (out, x) {
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
