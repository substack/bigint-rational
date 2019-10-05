module.exports = function divide (out, a, b) {
  var b0 = b[0], b1 = b[1]
  out[0] = a[0] * b1
  out[1] = a[1] * b0
  return out
}
