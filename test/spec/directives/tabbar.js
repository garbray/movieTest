'use strict';

describe('Directive: tabBar', function () {

  // load the directive's module
  beforeEach(module('movieTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tab-bar></tab-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tabBar directive');
  }));
});
