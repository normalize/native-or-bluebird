
var assert = require('assert')

var Promise

describe('require("native-or-bluebird")', function () {
  it('should return a Promise implementation', function () {
    Promise = require('..')

    return new Promise(function (resolve) {
      resolve(1)
    }).then(function (val) {
      assert.equal(val, 1)
    })
  })
})

describe('require("native-or-bluebird/promise")', function () {
  it('should return a Promise implementation', function () {
    Promise = require('../promise')

    return new Promise(function (resolve) {
      resolve(1)
    }).then(function (val) {
      assert.equal(val, 1)
    })
  })
})
