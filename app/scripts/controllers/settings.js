'use strict';

/**
 * @ngdoc function
 * @name movieTestApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the movieTestApp
 */
angular.module('movieTestApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
