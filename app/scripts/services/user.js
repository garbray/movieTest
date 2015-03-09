'use strict';

/**
 * @ngdoc service
 * @name movieTestApp.user
 * @description
 * # user
 * Service in the movieTestApp.
 */
angular.module('movieTestApp')
  .service('User', function User() {

    var registerUser = {
      name: 'Bryan Garzon',
      username: 'garbray',
      password: 'demo'
    };

    return {
      login: function (user) {
        if (registerUser.username === user.username && registerUser.password === user.password) {
          return true;
        } else {
          return false;
        }
      }
    };
  });
