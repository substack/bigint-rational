var rat = require('../')
var out = [0n,1n]
rat.add(out, [4n,17n], [15n,6n])
rat.multiply(out, out, [8n,5n])
rat.subtract(out, out, [37n,52n])
console.log(out) // [97194n,26520n]
rat.reduce(out, out)
console.log(out) // [16199n,4420n]
