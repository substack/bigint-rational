module.exports = function set (out, x, y) {
  var n = typeof x === 'bigint' ? x : BigInt(x)
  var d = typeof y === 'bigint' ? y : BigInt(y)
  out[0] = n
  out[1] = d
  return out
}
