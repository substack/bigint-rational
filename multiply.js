module.exports = function multiply (out, a, b) {
  if (a[0] === b[1]) {
    out[0] = b[0]
    out[1] = a[1]
  } else if (a[1] === b[0]) {
    out[0] = a[0]
    out[1] = b[1]
  } else {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
  }
  return out
}
