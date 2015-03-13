'use strict';

/**
 * @ngdoc directive
 * @name movieTestApp.directive:tabBar
 * @description
 * # tabBar
 */
angular.module('movieTestApp')
  .directive('tabBar', function ($location, User) {
    return {
      scope: {},
      replace: true,
      restrict: 'E',
      templateUrl: 'views/tab-bar.html',
      link: function postLink(scope /*, element, attrs*/) {
        scope.visible = User.hasSession();

        scope.goTo = function (path) {
          $location.path(path);
        }
      }
    };
  });
