"use strict";
var expect = require("chai").expect
var flatten = require("../")

describe("flatten", function () {
  it("should return empty if called with empty", function () {
    expect(flatten([])).to.eql([])
  })

  it("should flatten nested elements", function () {
    expect(flatten([1, [2]])).to.eql([1, 2])
  })

  it("should flatten array per specifications", function () {
    var res = flatten([1, [2, [3]], 4])
    expect(res).to.eql([1, 2, 3, 4])
  })
})
