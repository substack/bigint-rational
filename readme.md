# bigint-rational

rational arithmetic using built-in bigints

Use this module to represent arbitrary-precision fractions using speedier
built-in [BigInt][] types with tighter control over performance and allocation.

If you want to support engines that don't have [BigInt][] support, consider
[big-rat][].

[BigInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[big-rat]: https://github.com/rat-nest/big-rat

# example

``` js
var rat = require('bigint-rational')
var out = [0n,1n]
rat.add(out, [4n,17n], [15n,6n])
rat.multiply(out, out, [8n,5n])
rat.subtract(out, out, [37n,52n])
console.log(out) // [97194n,26520n]
rat.reduce(out, out)
console.log(out) // [16199n,4420n]
```

# api

You can load all the methods:

```
var rat = require('bigint-rational')
```

Or you can load individual files by their name. For example, to only load the
reduce method:

``` js
var reduce = require('bigint-rational/reduce')
```

The conventions of this module are very similar to `gl-vec3` or `gl-mat4` where
the container is an array or array-like type (in this case, a 2-tuple array).

If the result of the calculation is another rational, this result is written to
the first argument (`out`) and is also the return value. This allows you to have
more control over memory allocations, although the built-in bigint type has its
own allocation profile and engine optimizations. It is always safe to use the
same rational in the output and any of the arguments.

As you perform operations on rationals, the numerator and denominator will tend
to grow. Methods such as `add()` are implemented without computing a common
denominator and instead work according to `a/b + c/d = (a*d + b*c) / (b*d)`.

You can simplify the fractions using the `reduce()` method. After reducing,
operations will tend to be faster but the reduce method itself has a performance
cost as it must compute the greatest common divisor of both terms (a recursive
algorithm). None of the arithmetic operations will automatically reduce the
rational so that you have more fine-grained control over performance. Only
`reduce()` uses a recursive algorithm.

## rat.abs(out:rat, a:rat)

Take the absolute value of the rational `a`, storing the result in `out`.

Returns the stored result `out`.

## rat.add(out:rat, a:rat, b:rat)

Add two rationals `a` and `b`, storing the result in `out`.

Returns the stored result `out`.

## var clone = rat.clone(a:rat)

Return a new rational `clone` based on the contents of the rational `a`.

## rat.compare(a:rat, b:rat)

Return whether `a` is greater than `b` (`+1`), less than `b` (`-1`), or equal to
b (`0`).

Rationals do not need to be reduced to be considered equal.
`9/12` and `6/8` are considered equal.

## rat.copy(out:rat, a:rat)

Copy the contents of the rational `a` into `out`.

Returns the stored result `out`.

## var r = rat.create(n:bigint, d:bigint)

Return a new rational `r` from a numerator `n` and a denominator `d`.

If `n` or `d` is not a bigint, it will be converted to a bigint using `BigInt()`
this means you can use javascript numbers, decimal strings, or hex strings
(prefaced by 0x) for the numerator and denominator.

## rat.divide(out:rat, a:rat, b:rat)

Divide the rational `a` by the rational `b`, storing the result in `out`.

Returns the stored result `out`.

## rat.eq(a:rat, b:rat)

Return a boolean whether the rationals `a` and `b` are equivalent.

Rationals do not need to be reduced to be considered equal.

## rat.gt(a:rat, b:rat)

Return a boolean whether the rational `a` is greater than the rational `b`.

## rat.gte(a:rat, b:rat)

Return a boolean whether the rational `a` is greater than or equal to the
rational `b`.

## rat.inverse(out:rat, a:rat)

Calculate the reciprocal of `a`, storing the result in `out`.

Returns the stored result `out`.

## rat.lt(a:rat, b:rat)

Return a boolean whether the rational `a` is less than to the rational `b`.

## rat.lte(a:rat, b:rat)

Return a boolean whether the rational `a` is less than or equal to the rational
`b`.

## rat.max(out:rat, a:rat, ...)

Calculate the largest rational from the provided values after the first
argument, storing the result in `out`. 

Returns the stored result `out`.

## rat.min(out:rat, a:rat, ...)

Calculate the smallest rational from the provided values after the first
argument, storing the result in `out`. 

Returns the stored result `out`.

## rat.multiply(out:rat, a:rat, b:rat)

Multiply the rational `a` by the rational `b`, storing the result in `out`.

Returns the stored result `out`.

## rat.negate(out:rat, a:rat)

Negate the rational `a`, storing the result in `out`.

## rat.pow(out:rat, a:rat, p:bigint)

Raise the rational `a` to the power `p`, storing the result in `out`.

## rat.set(out:rat, n:bigint, d:bigint)

Store the numerator `n` and the denominator `d` in `out`.

If `n` or `d` is not a bigint, it will be converted to a bigint using `BigInt()`
this means you can use javascript numbers, decimal strings, or hex strings
(prefaced by 0x) for the numerator and denominator.

## rat.sign(a:rat)

Return the sign of the rational `a` as a bigint: `1n`, `+1n`, or `0n`.

## rat.reduce(out:rat, a:rat)

Simplify and normalize the rational `a` by factoring out a common divisor and
moving the negative sign to the numerator if `a` has a negative sign.

Returns the stored result `out`.

## rat.subtract(out:rat, a:rat, b:rat)

Subtract the rational `a` from the rational `b, storing the result in `out`.

Returns the stored result `out`.

# license

BSD
