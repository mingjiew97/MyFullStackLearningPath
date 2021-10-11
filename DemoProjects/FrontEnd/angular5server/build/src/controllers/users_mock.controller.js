'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLogin = postLogin;
exports.postRegister = postRegister;

var _users = require('../models/users.model');

function postLogin(req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;

  var user = _users.users.find(function (u) {
    return u.email === email && u.password === password;
  });
  if (user) {
    res.json({
      success: true,
      user: user
    });
  } else {
    res.json({ success: false });
  }
}

function postRegister(req, res) {
  // add validation.
  var email = req.body.email;

  if (!_users.users.find(function (u) {
    return u.email === email && u.password === password;
  })) {
    _users.users.push(req.body);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
}