module.exports = function divide (out, a, b) {
  if (a[1] === b[1]) {
    var a0 = a[0], b0 = b[0]
    out[0] = a0
    out[1] = b0
  } else {
    var b0 = b[0], b1 = b[1]
    out[0] = a[0] * b1
    out[1] = a[1] * b0
  }
  return out
}
