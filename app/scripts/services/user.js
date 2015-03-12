'use strict';

/**
 * @ngdoc service
 * @name movieTestApp.user
 * @description
 * # user
 * Service in the movieTestApp.
 */
angular.module('movieTestApp')
  .service('User', function User($window, $q, $rootScope) {

    var registerUser = {
      name: 'Bryan Garzon',
      username: 'garbray',
      password: 'demo',
      sessionid: 'blablablabla',
      sex: 'male',
      age: '27',
      text: 'asdfadsfadsf asd fads fasdf asdf asdf asd'
    },
      localStorageId = 'session';

    return {
      login: function (user) {
        var deferred = $q.defer();
        if (registerUser.username === user.username && registerUser.password === user.password) {
          deferred.resolve(true);
          this.saveSession(user.session_id);
        } else {
          deferred.reject({error: true, text: 'You\'ve tried to sign in with an incorrect email address or password.'});
        }
        return deferred.promise;
      },

      hasSession: function () {
        return !!$window.localStorage.getItem(localStorageId);
      },

      removeSession: function () {
        // $rootScope.$broadcast('vm.logout');
        $window.localStorage.removeItem(localStorageId);
      },

      saveSession: function (sessionid) {
        window.localStorage.setItem(localStorageId, sessionid);
      }

    };
  });
