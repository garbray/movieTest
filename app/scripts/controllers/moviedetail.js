'use strict';

/**
 * @ngdoc function
 * @name movieTestApp.controller:MoviedetailCtrl
 * @description
 * # MoviedetailCtrl
 * Controller of the movieTestApp
 */
angular.module('movieTestApp')
  .controller('MoviedetailCtrl', function ($scope, $location, $routeParams, $window) {
    var lodash = $window._,
        moviesItems = $window.movies.items;
    $scope.movieDetail = lodash.find(moviesItems, { 'id': parseInt($routeParams.id, 10) });
    console.log($scope.movieDetail);
    $scope.back = function () {
        $location.path('/');
    };
  });
