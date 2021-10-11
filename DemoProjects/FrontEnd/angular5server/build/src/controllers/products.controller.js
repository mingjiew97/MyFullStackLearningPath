'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.postProducts = postProducts;
exports.putProducts = putProducts;
exports.deleteProducts = deleteProducts;

var _products = require('../models/products.model');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProducts(req, res) {
  _products2.default.find(function (err, docs) {
    res.json(docs);
  });
}

function getProduct(req, res) {
  var name = req.params.name;

  _products2.default.findOne({ name: name }, function (err, doc) {
    res.json(doc);
  });
}

function postProducts(req, res, next) {
  var product = new _products2.default(req.body);
  product.save(function (err) {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}

function putProducts(req, res) {
  var product = req.body; // new Product will generate new _id which is immutable.
  var name = req.params.name;

  _products2.default.findOneAndUpdate({ name: name }, product, function (err) {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}

function deleteProducts(req, res) {
  var name = req.params.name;

  _products2.default.remove({ name: name }, function (err) {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}