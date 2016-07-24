"use strict";

module.exports = function (array, arrays) {
  return recursive_flatten(Array.prototype.slice.call(arguments))
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
