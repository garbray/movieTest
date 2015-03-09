'use strict';

describe('Controller: LinkbarCtrl', function () {

  // load the controller's module
  beforeEach(module('movieTestApp'));

  var LinkbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinkbarCtrl = $controller('LinkbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
