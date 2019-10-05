module.exports = function subtract (out, a, b) {
  out[0] = a[0] * b[1] - b[0] * a[1]
  out[1] = a[1] * b[1]
  return out
}
