var bn = require('./lib/bn.js')

module.exports = function sign (x) {
  return bn.sign(x[0]) * bn.sign(x[1])
}
