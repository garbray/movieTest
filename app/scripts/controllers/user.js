'use strict';

/**
 * @ngdoc function
 * @name movieTestApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the movieTestApp
 */
angular.module('movieTestApp')
  .controller('UserCtrl', function ($scope, $location, User) {
    $scope.status =  'selection';
    $scope.error =  false;

    $scope.changeStatus = function (status) {
      $scope.status = status;
    };

    $scope.register = {
      submit: function (form, user) {
        form.$invalid = true;
        User.login(user).then(function (login) {
          if (login) {
            $location.path('/home');
          }
        }, function (error) {
          $scope.error = true;
          $scope.errorText = error.text;
        });

      }
    };
  });
