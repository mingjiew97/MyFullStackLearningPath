'use strict';

var _chai = require('chai');

var _app = require('../src/app');

describe("server", function () {
  it("server should exist", function () {
    (0, _chai.expect)(_app.app).to.exist;
  });
});