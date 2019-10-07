module.exports = function compare (a, b) {
  var x = a[0] * b[1]
  var y = b[0] * a[1]
  if (x === y) return 0
  return x < y ? -1 : +1
}
