'use strict';

/**
 * @ngdoc function
 * @name movieTestApp.controller:LinkbarCtrl
 * @description
 * # LinkbarCtrl
 * Controller of the movieTestApp
 */
angular.module('movieTestApp')
  .controller('LinkbarCtrl', function ($scope) {
    $scope.links = ['hola', 'que', 'mas'];
    $scope.categories = ['hola', 'que', 'mas'];
  });
