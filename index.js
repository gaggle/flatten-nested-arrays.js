"use strict";

/**
 * Flatten all the elements.
 * E.g. [1, [2, [3] ], 4] -> [1, 2, 3, 4]
 *
 * @param {Array} array
 */
module.exports = function (array) {
  return recursive_flatten(array)
}

var recursive_flatten = function (array) {
  var res = []
  for (let e of array) {
    if (Array.isArray(e)) {
      res.push(...recursive_flatten(e))
      continue
    }
    res.push(e)
  }
  return res
}
