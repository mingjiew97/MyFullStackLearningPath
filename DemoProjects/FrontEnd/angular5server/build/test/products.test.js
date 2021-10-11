'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../src/app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('products API', function () {

  var product = {
    "name": "mock",
    "brand": "mock",
    "price": 888,
    "stock": 888,
    "image": "https://s3.amazonaws.com/msi-tech/msi.png"
  };

  describe('POST /products', function () {
    it('should add a products', function (done) {
      (0, _supertestAsPromised2.default)(_app.app).post('/products').send(product).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.success).to.be.true;
        done();
      }).catch(done);
    });
  });

  describe('GET /products', function () {
    it('should get all products', function (done) {
      (0, _supertestAsPromised2.default)(_app.app).get('/products').expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body).to.be.an('array');
        done();
      }).catch(done);
    });
  });

  describe('GET /products/:name', function () {
    it('should get one product by name', function (done) {
      (0, _supertestAsPromised2.default)(_app.app).get('/products/' + product.name).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.name).to.equal(product.name);
        (0, _chai.expect)(res.body.brand).to.equal(product.brand);
        done();
      }).catch(done);
    });
  });

  describe('PUT /products/:name', function () {
    it('should put one product', function (done) {
      var p = Object.assign(product, { price: 999 });
      (0, _supertestAsPromised2.default)(_app.app).put('/products/' + product.name).send(p).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.success).to.be.true;
        done();
      }).catch(done);
    });
  });

  describe('DELETE /product', function () {
    it('should delete one product', function (done) {
      (0, _supertestAsPromised2.default)(_app.app).delete('/products/' + product.name).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.success).to.be.true;
        done();
      }).catch(done);
    });
  });
});