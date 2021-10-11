'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../src/app');

var _users = require('../src/models/users.model');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('users API', function () {
  var user = {
    "email": "mock@mock.mock",
    "name": "mock",
    "password": "mock"
  };

  // remove newly created user.
  after(function (done) {
    _users2.default.remove({ email: user.email }, function (err) {
      done();
    });
  });

  describe('POST /register', function () {
    it('should register an user', function (done) {
      (0, _supertestAsPromised2.default)(_app.app).post('/register').send(user).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.success).to.be.true;
        done();
      }).catch(done);
    });
  });

  describe('POST /login', function () {
    it('should login an user', function (done) {
      (0, _supertestAsPromised2.default)(_app.app).post('/login').send(user).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.success).to.be.true;
        done();
      }).catch(done);
    });
  });
});