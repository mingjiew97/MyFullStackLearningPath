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

var products = _products.products.slice();

function getProducts(req, res) {
  res.json(products);
}

function getProduct(req, res) {
  var name = req.params.name;

  res.json(products.find(function (p) {
    return p.name === name;
  }));
}

function postProducts(req, res) {
  var product = req.body;
  products.push(product);
  res.json(products);
}

function putProducts(req, res) {
  var product = req.body;
  deleteProduct(product.name);
  products.push(product);
  res.json(products);
}

function deleteProducts(req, res) {
  var name = req.params.name;

  deleteProduct(name);
  if (!products.length) {
    products = _products.products.slice();
  }
  res.json(products);
}

function deleteProduct(name) {
  var index = void 0;
  products.forEach(function (p, i) {
    if (name === p.name) {
      index = i;
    }
  });
  products.splice(index, 1);
}