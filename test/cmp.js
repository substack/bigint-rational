var rat = require('../')
var test = require('tape')

test('cmp greater', function (t) {
  t.equal(rat.compare([43n,15n],[17n,6n]),+1)
  t.equal(rat.gt([43n,15n],[17n,6n]),true)
  t.equal(rat.gte([43n,15n],[17n,6n]),true)
  t.equal(rat.lt([43n,15n],[17n,6n]),false)
  t.equal(rat.lte([43n,15n],[17n,6n]),false)
  t.equal(rat.eq([43n,15n],[17n,6n]),false)
  t.end()
})

test('cmp less', function (t) {
  t.equal(rat.compare([4n,15n],[17n,6n]),-1)
  t.equal(rat.gt([4n,15n],[17n,6n]),false)
  t.equal(rat.gte([4n,15n],[17n,6n]),false)
  t.equal(rat.lt([4n,15n],[17n,6n]),true)
  t.equal(rat.lte([4n,15n],[17n,6n]),true)
  t.equal(rat.eq([4n,15n],[17n,6n]),false)
  t.end()
})

test('cmp multiple equal', function (t) {
  t.equal(rat.compare([35n,21n],[45n,27n]),0)
  t.equal(rat.gt([35n,21n],[45n,27n]),false)
  t.equal(rat.gte([35n,21n],[45n,27n]),true)
  t.equal(rat.lt([35n,21n],[45n,27n]),false)
  t.equal(rat.lte([35n,21n],[45n,27n]),true)
  t.equal(rat.eq([35n,21n],[45n,27n]),true)
  t.end()
})

test('cmp equal', function (t) {
  t.equal(rat.compare([5n,2n],[5n,2n]),0)
  t.equal(rat.gt([5n,2n],[5n,2n]),false)
  t.equal(rat.gte([5n,2n],[5n,2n]),true)
  t.equal(rat.lt([5n,2n],[5n,2n]),false)
  t.equal(rat.lte([5n,2n],[5n,2n]),true)
  t.equal(rat.eq([5n,2n],[5n,2n]),true)
  t.end()
})

test('min', function (t) {
  var out = [0n,1n]
  t.equal(rat.min(out,[5n,2n],[17n,4n],[48n,31n],[130n,55n]),out)
  t.deepEqual(out,[48n,31n])
  t.end()
})

test('max', function (t) {
  var out = [0n,1n]
  t.equal(rat.max(out,[5n,2n],[17n,4n],[48n,31n],[130n,55n]),out)
  t.deepEqual(out,[17n,4n])
  t.end()
})

test('max negative', function (t) {
  var out = [0n,1n]
  t.equal(rat.max(out,[5n,-2n],[-17n,4n],[48n,-31n],[-130n,55n]),out)
  t.deepEqual(out,[48n,-31n])
  t.end()
})

test('min negative', function (t) {
  var out = [0n,1n]
  t.equal(rat.min(out,[5n,-2n],[-17n,4n],[48n,-31n],[-130n,55n]),out)
  t.deepEqual(out,[-17n,4n])
  t.end()
})
