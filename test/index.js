/**
 * Imports
 */

var maybeOver = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(maybeOver(4, [isOdd, isEven]), [false, true])
  t.deepEqual(maybeOver(4, [isOdd, isEven, 3]), [false, true, 3])
  t.end()
})

/**
 * Helpers
 */

function isEven (n) {
  return n % 2 === 0
}

function isOdd (n) {
  return !isEven(n)
}
