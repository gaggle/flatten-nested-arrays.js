"use strict";

module.exports = function (array, arrays) {
  var combined = Array.prototype.slice.call(arguments)
  return recursive_flatten(combined)
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
