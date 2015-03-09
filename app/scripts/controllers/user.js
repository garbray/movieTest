'use strict';

/**
 * @ngdoc function
 * @name movieTestApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the movieTestApp
 */
angular.module('movieTestApp')
  .controller('UserCtrl', function ($scope, User) {
    $scope.status =  'selection';

    $scope.changeStatus = function (status) {
      $scope.status = status;
    };

    $scope.register = {
      submit: function (form) {
        console.log(form);
      }
    };
  });
