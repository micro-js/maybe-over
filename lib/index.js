/**
 * Modules
 */

var isFunction = require('@f/is-function')
var map = require('@f/map-array')

/**
 * Expose maybeOver
 */

module.exports = maybeOver

/**
 * maybeOver
 */

function maybeOver (value, fns) {
  return map(function (maybeFn) {
    return isFunction(maybeFn)
      ? maybeFn(value)
      : maybeFn
  }, fns)
}
