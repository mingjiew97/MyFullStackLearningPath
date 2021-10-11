var userModel = require('../models/user.model');

exports.getUsers =  function(req, res, next) {
  res.send(userModel.USERS);
};