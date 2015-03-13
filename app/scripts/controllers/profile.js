'use strict';

/**
 * @ngdoc function
 * @name movieTestApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the movieTestApp
 */
angular.module('movieTestApp')
  .controller('ProfileCtrl', function ($scope, $location, User) {
    User.getCurrentUser().then(function (userInfo) {
      console.log(userInfo);
      $scope.user = userInfo;
    }, function (error) {
      console.log(error);
      $location.path('/');
    });
  });
