'use strict';

/**
 * @ngdoc overview
 * @name movieTestApp
 * @description
 * # movieTestApp
 *
 * Main module of the application.
 */
angular
  .module('movieTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/home', {
        templateUrl: 'views/movielist.html',
        controller: 'MovielistCtrl'
      })
      .when('/movieDetail/?:id', {
        templateUrl: 'views/moviedetail.html',
        controller: 'MoviedetailCtrl'
      })
      .when('/settings/', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/profile/', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope, $location, User) {
    $rootScope.$on('$routeChangeStart', function () {
      if (!User.hasSession()) {
        $location.path('/');
      }
    });
  });
