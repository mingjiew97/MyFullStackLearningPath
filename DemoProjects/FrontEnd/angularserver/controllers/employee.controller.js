var EMPLOYEES = require('../models/employee.model');

var getEmployees = function(req, res, next) {
  res.send(EMPLOYEES);
}

module.exports = {
  getEmployees: getEmployees
};