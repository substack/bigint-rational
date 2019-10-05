exports.abs = function bnAbs (x) { return x < 0n ? -x : x }
exports.sign = function bnSign (x) { return x === 0n ? 0n : (x < 0n ? -1n : 1n) }
