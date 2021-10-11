'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductSchema = new _mongoose.Schema({
  name: { type: String, unique: true, require: true },
  brand: String,
  price: Number,
  stock: Number,
  image: String
}, { collection: 'products' });

exports.default = _mongoose2.default.model('Product', ProductSchema);