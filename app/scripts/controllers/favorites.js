'use strict';

/**
 * @ngdoc function
 * @name movieTestApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the movieTestApp
 */
angular.module('movieTestApp')
  .controller('FavoritesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
