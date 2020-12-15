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

test('toDecimal', function (t) {
  t.equal(
    rat.toDecimal([1n, 3n], 0),
    '0'
  )
  t.equal(
    rat.toDecimal([2n, 3n], 0),
    '1'
  )
  t.equal(
    rat.toDecimal([200n, 3n], 0),
    '67'
  )
  t.equal(
    rat.toDecimal([203n, 3n], 0),
    '68'
  )
  t.equal(
    rat.toDecimal([203n, 3n], 3),
    '67.667'
  )
  t.equal(
    rat.toDecimal([1n, 3n], 1),
    '0.3'
  )
  t.equal(
    rat.toDecimal([1n, 3n], 50),
    '0.33333333333333333333333333333333333333333333333333'
  )
  t.equal(
    rat.toDecimal([2n, 3n], 50),
    '0.66666666666666666666666666666666666666666666666667'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 50
    ),
    '330.59466159682664113417484384000769232161387506493404'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 50, 2
    ),
    '101001010.10011000001110111011111000001110100011101011110001'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 22, 2
    ),
    '101001010.1001100000111011110000'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 40, 3
    ),
    '110020.1210011112011122211220012101202121222120'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 20, 3
    ),
    '110020.12100111120111222120'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 19, 3
    ),
    '110020.1210011112011122212'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 13, 3
    ),
    '110020.1210011112011'
  )
  t.equal(
    rat.toDecimal(
      [2738273172384971238947893214n, 8282871717161617238123123n], 60, 16
    ),
    '14a.983bbe0e8ebc523756db3011c8b2d0c236faa15203ff072e7b60985f3763'
  )
  t.equal(
    rat.toDecimal(
      [1519741610673659037616080733770n, 4596993803024697567158333265n], 60, 16
    ),
    '14a.983bbe0e8ebc523756db3011c8b2d0c236faa15203ff072e7b60985f3763'
  )
  t.end()
})
