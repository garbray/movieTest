'use strict';

describe('Controller: MovielistCtrl', function () {

  // load the controller's module
  beforeEach(module('movieTestApp'));

  var MovielistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovielistCtrl = $controller('MovielistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
