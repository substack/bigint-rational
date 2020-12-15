module.exports = function toDecimal (x, precision, radix) {
  if (precision === undefined) precision = 10n
  if (!radix) radix = 10n
  var p = typeof precision === 'bigint' ? precision : BigInt(precision)
  var r = typeof radix === 'bigint' ? radix : BigInt(radix)
  var n = x[0], d = x[1], rp = r**(p+1n)
  var i = n/d
  var dec = n*rp/d - (n/d)*rp + r/2n
  if (dec > rp) { // carry
    i += 1n
    dec -= rp
  }
  var nr = Number(r)
  var pre = i.toString(nr)
  dec /= r;
  var post = dec === 0n ? '' : dec.toString(nr)
  return pre + (p === 0n ? '' : '.') + post
}
