"use strict";
const expect = require("chai").expect
const flatten = require("../")

describe("flatten", function () {
  it("should throw if called with null", function () {
    expect(() => flatten(null)).to.throw()
  })

  it("should throw if called with undefined", function () {
    expect(() => flatten(undefined)).to.throw()
  })

  it("should return empty if called with empty", function () {
    expect(flatten([])).to.eql([])
  })

  it("should flatten nested elements", function () {
    expect(flatten([1, [2]])).to.eql([1, 2])
  })

  it("should flatten array per specifications", function () {
    const res = flatten([1, [2, [3]], 4])
    expect(res).to.eql([1, 2, 3, 4])
  })
})
