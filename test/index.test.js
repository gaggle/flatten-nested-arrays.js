"use strict";
var expect = require("chai").expect
var flatten = require("../")

describe("flatten", function () {
  it("should return a non-nested array", function () {
    expect(flatten([1])).to.eql([1])
  })

  it("should accept multiple array args", function () {
    expect(flatten([1], [2])).to.eql([1, 2])
  })

  it("should flatten a nested array", function () {
    expect(flatten([1, [2]])).to.eql([1, 2])
  })

  it("should flatten array per specification", function () {
    var res = flatten([1, [2, [3]], 4])
    expect(res).to.eql([1, 2, 3, 4])
  })
})
