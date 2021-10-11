var angular = require('angular');
require('bootstrap/dist/css/bootstrap.css');

var app = angular.module('mainApp', []);
app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.test = 'test';
}]);