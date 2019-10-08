var rat = require('../')
var test = require('tape')

test('add', function (t) {
  var out = [0n,1n]
  t.equal(rat.add(out, [11n,3n], [9n,8n]), out)
  t.deepEqual(out, [115n,24n])
  rat.set(out, 70n, 13n)
  rat.add(out, out, [5n,26n])
  rat.reduce(out, out)
  t.deepEqual(out, [145n,26n])
  t.end()
})

test('add negative', function (t) {
  var out = [0n,1n]
  t.equal(rat.add(out, [-11n,3n], [9n,8n]), out)
  rat.reduce(out, out)
  t.deepEqual(out, [-61n,24n])
  t.end()
})

test('add same denominator', function (t) {
  var out = [0n,1n]
  t.equal(rat.add(out, [4n,3n], [1n,3n]), out)
  t.deepEqual(out, [5n,3n])
  t.end()
})

test('subtract', function (t) {
  var out = [0n,1n]
  t.equal(rat.subtract(out, [115n,24n], [9n,8n]), out)
  rat.reduce(out, out)
  t.deepEqual(out, [11n,3n])
  t.end()
})

test('subtract same denominator', function (t) {
  var out = [0n,1n]
  t.equal(rat.subtract(out, [5n,3n], [4n,3n]), out)
  t.deepEqual(out, [1n,3n])
  t.end()
})

test('multiply', function (t) {
  var out = [0n,1n]
  t.equal(rat.multiply(out, [13n,37n], [55n,3n]), out)
  rat.reduce(out, out)
  t.deepEqual(out, [715n,111n])
  t.end()
})

test('multiply when numerator = denominator', function (t) {
  var out = [0n,1n]
  t.deepEqual(rat.multiply(out, [3n,7n], [7n,8n]), [3n,8n])
  t.deepEqual(rat.multiply(out, [7n,3n], [8n,7n]), [8n,3n])
  t.end()
})

test('divide', function (t) {
  var out = [0n,1n]
  t.equal(rat.divide(out, [715n,111n], [13n,37n]), out)
  rat.reduce(out, out)
  t.deepEqual(out, [55n,3n])
  t.end()
})

test('divide same denominator', function (t) {
  var out = [0n,1n]
  t.equal(rat.divide(out, [4n,3n], [7n,3n]), out)
  t.deepEqual(out, [4n,7n])
  t.end()
})

test('pow', function (t) {
  var out = [0n,1n]
  t.equal(rat.pow(out, [65n,7n], 5n), out)
  t.deepEqual(out, [1160290625n,16807n])
  rat.pow(out, [-5n,7n], 4n)
  t.deepEqual(out, [625n,2401n])
  t.end()
})

test('negative pow', function (t) {
  var out = [0n,1n]
  t.equal(rat.pow(out, [65n,7n], -5n), out)
  t.deepEqual(out, [16807n,1160290625n])
  rat.pow(out, [-5n,7n], -4n)
  t.deepEqual(out, [2401n,625n])
  rat.pow(out, [65n,-7n], -5n)
  t.deepEqual(out, [-16807n,1160290625n])
  rat.pow(out, [-65n,7n], -5n)
  t.deepEqual(out, [16807n,-1160290625n])
  rat.pow(out, [-65n,-7n], -5n)
  t.deepEqual(out, [-16807n,-1160290625n])
  rat.pow(out, [-5n,-7n], -4n)
  t.deepEqual(out, [2401n,625n])
  rat.pow(out, [-5n,7n], 0n)
  t.deepEqual(out, [1n,1n])
  t.end()
})

test('abs', function (t) {
  var out = [0n,1n]
  t.equal(rat.abs(out, [5n,7n]), out)
  t.deepEqual(out, [5n,7n])
  rat.abs(out, [-5n,7n])
  t.deepEqual(out, [5n,7n])
  rat.abs(out, [5n,-7n])
  t.deepEqual(out, [5n,7n])
  rat.abs(out, [-5n,-7n])
  t.deepEqual(out, [5n,7n])
  t.end()
})

test('negate', function (t) {
  var out = [0n,1n]
  t.equal(rat.negate(out, [5n,7n]), out)
  t.deepEqual(out, [-5n,7n])
  rat.negate(out, [-5n,7n])
  t.deepEqual(out, [5n,7n])
  rat.negate(out, [5n,-7n])
  t.deepEqual(out, [5n,7n])
  rat.negate(out, [-5n,-7n])
  t.deepEqual(out, [-5n,7n])
  t.end()
})

test('sign', function (t) {
  t.equal(rat.sign([5n,7n]), 1n)
  t.equal(rat.sign([-5n,7n]), -1n)
  t.equal(rat.sign([5n,-7n]), -1n)
  t.equal(rat.sign([-5n,-7n]), 1n)
  t.equal(rat.sign([0n,1n]), 0n)
  t.equal(rat.sign([0n,-1n]), 0n)
  t.end()
})

test('reduce', function (t) {
  var out = [0n,1n]
  t.deepEqual(rat.reduce(out,[-5n,-1n]), [5n,1n])
  t.deepEqual(rat.reduce(out,[10n,-5n]), [-2n,1n])
  t.deepEqual(rat.reduce(out,[0n,7n]), [0n,1n])
  t.deepEqual(rat.reduce(out,[0n,-7n]), [0n,1n])
  t.deepEqual(rat.reduce(out,[-121n,-33n]), [11n,3n])
  t.end()
})
