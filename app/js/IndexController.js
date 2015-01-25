(function() {
  'use strict';
  
  var APP = angular.module('SeedApp', []);

  APP.controller('IndexController', ['$scope', function($scope) {
    $scope.hello = 'hello';
  }]);
})();
