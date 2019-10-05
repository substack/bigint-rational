module.exports = function create (n, d) {
  var bn = typeof n === 'bigint' ? n : BigInt(n)
  var bd = typeof d === 'bigint' ? d : BigInt(d)
  return [bn,bd]
}
