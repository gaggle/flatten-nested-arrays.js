"use strict";

const recursiveFlatten = (array) => {
  return array.reduce((res, e) => {
    Array.isArray(e) ? res.push(...recursiveFlatten(e)) : res.push(e)
    return res
  }, [])
}

/**
 * Flatten all the elements of array.
 * E.g. [1, [2, [3] ], 4] -> [1, 2, 3, 4]
 *
 * @param {Array} array
 */
module.exports = recursiveFlatten
