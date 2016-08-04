"use strict";

var recursiveFlatten = function (array) {
  var res = []
  for (let e of array) {
    if (Array.isArray(e)) {
      res.push(...recursiveFlatten(e))
      continue
    }
    res.push(e)
  }
  return res
}

/**
 * Flatten all the elements.
 * E.g. [1, [2, [3] ], 4] -> [1, 2, 3, 4]
 *
 * @param {Array} array
 */
module.exports = recursiveFlatten
