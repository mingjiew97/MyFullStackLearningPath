'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportFacebook = require('passport-facebook');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_passport2.default.use(new _passportFacebook.Strategy({
  clientID: process.env.CLIENT_ID || "571123523279490",
  clientSecret: process.env.CLIENT_SECRET || "5c0f5883f46e9dcc579e393c0ad8abc8",
  callbackURL: 'http://localhost:3000/fblogin/return'
}, function (accessToken, refreshToken, profile, cb) {
  console.log(accessToken);
}));