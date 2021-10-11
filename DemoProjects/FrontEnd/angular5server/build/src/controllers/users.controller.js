'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLogin = postLogin;
exports.postRegister = postRegister;
exports.postFBLogin = postFBLogin;

var _users = require('../models/users.model');

var _users2 = _interopRequireDefault(_users);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postLogin(req, res, next) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;

  _users2.default.findOne({ email: email }, function (err, user) {
    if (err) return next(err);
    if (!user) return next('email does not exist.');
    if (user.password === undefined) return next('try third party login.');
    _bcrypt2.default.compare(password, user.password, function (err, result) {
      if (result) {
        res.json({
          success: true,
          user: user
        });
      } else {
        return next('password is not correct.');
      }
    });
  });
}

function postRegister(req, res, next) {
  var user = new _users2.default(req.body);
  _bcrypt2.default.hash(req.body.password, 10, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    user.save(function (err) {
      if (err) return next('Register failed.');
      res.json({
        success: true
      });
    });
  });
}

function postFBLogin(req, res, next) {
  res.json(req);
  // const fbUser = req.body;
  // User.findOne({email: fbUser.email}, (err, user) => {
  //   if(err) return next(err);
  //   if(!user) { //register
  //     const user = new User({
  //       name: `${fbUser.firstName} ${fbUser.lastName}`,
  //       email: fbUser.email,
  //       fbProvider: {
  //         id: fbUser.id,
  //         authToken: fbUser.authToken
  //       }
  //     });
  //     user.save((err) => {
  //       if(err) return next(err);
  //       res.json({
  //         success: true,
  //         user
  //       });
  //     });
  //   } else {
  //     if(user.fbProvider.id === fbUser.id) {
  //       res.json({
  //         success: true,
  //         user
  //       });
  //     } else{
  //       return next('your information is not correct.');
  //     }
  //   }
  // });
}