'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _heroes = require('./controllers/heroes.controller');

var _products = require('./controllers/products.controller');

var _users = require('./controllers/users.controller');

require('./config/passport.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Connect to Mongodb
_mongoose2.default.Promise = global.Promise;
var conn = _mongoose2.default.connect("mongodb://localhost:27017/mercury");
conn.then(function () {
  console.log('mongodb connected!');
}, function (err) {
  console.log('mongodb connection failed.');
});

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.post('/login', _users.postLogin);
app.post('/fblogin', _passport2.default.authenticate('facebook-token'), _users.postFBLogin);
app.post('/register', _users.postRegister);

app.get('/heroes', _heroes.getHeroes);

app.get('/products', _products.getProducts);
app.get('/products/:name', _products.getProduct);
app.post('/products', _products.postProducts);
app.put('/products/:name', _products.putProducts);
app.delete('/products/:name', _products.deleteProducts);

// error handling
app.use(function (err, req, res, next) {
  res.json({
    success: false,
    err: err
  });
});

app.listen(process.env.port || 3000);
console.log("server started");

exports.app = app;