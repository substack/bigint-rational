var rat = require('../')
var test = require('tape')

test('add', function (t) {
  var out = [0n,1n]
  t.equal(rat.add(out, [11n,3n], [9n,8n]), out)
  t.deepEqual(out, [115n,24n])
  rat.set(out, 70n, 13n)
  rat.add(out, out, [5n,26n])
  rat.simplify(out, out)
  t.deepEqual(out, [145n,26n])
  t.end()
})

test('add negative', function (t) {
  var out = [0n,1n]
  t.equal(rat.add(out, [-11n,3n], [9n,8n]), out)
  rat.simplify(out, out)
  t.deepEqual(out, [-61n,24n])
  t.end()
})

test('subtract', function (t) {
  var out = [0n,1n]
  t.equal(rat.subtract(out, [115n,24n], [9n,8n]), out)
  rat.simplify(out, out)
  t.deepEqual(out, [11n,3n])
  t.end()
})

test('multiply', function (t) {
  var out = [0n,1n]
  t.equal(rat.multiply(out, [13n,37n], [55n,3n]), out)
  rat.simplify(out, out)
  t.deepEqual(out, [715n,111n])
  t.end()
})

test('divide', function (t) {
  var out = [0n,1n]
  t.equal(rat.divide(out, [715n,111n], [13n,37n]), out)
  rat.simplify(out, out)
  t.deepEqual(out, [55n,3n])
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