'use strict';

var _chai = require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _heroes = require('../../src/controllers/heroes.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("heroes controller", function () {

  describe("heroes controller exists", function () {
    it("getHeroes exists", function () {
      (0, _chai.expect)(_heroes.getHeroes).to.exist;
    });
  });

  describe("heroes controller works", function () {
    it("getHeroes exists", function () {
      var req = void 0,
          res = void 0,
          spy = void 0;

      req = res = {};
      spy = res.json = _sinon2.default.spy();

      (0, _heroes.getHeroes)(req, res);

      var result = _lodash2.default.flatten(spy.args)[0];
      (0, _chai.expect)(result).to.be.exist;
      (0, _chai.expect)(result).to.be.an('array');
      (0, _chai.expect)(result.length).to.equal(10);
    });
  });
});