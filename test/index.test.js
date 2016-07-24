"use strict";
var expect = require("chai").expect
var flatten = require("../")

describe("flatten", function () {
  it("should flatten arrays", function () {
    var res = flatten([1, [2, [3]], 4])
    expect(res).to.eql([1, 2, 3, 4])
  })
})
