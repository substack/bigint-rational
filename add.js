module.exports = function add (out, a, b) {
  if (a[1] === b[1]) {
    out[0] = a[0] + b[0]
    out[1] = a[1]
  } else {
    out[0] = a[0] * b[1] + b[0] * a[1]
    out[1] = a[1] * b[1]
  }
  return out
}
