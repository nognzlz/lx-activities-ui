'use strict';

describe('Controller: SearchactivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('lxActivitiesUiApp'));

  var SearchactivitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchactivitiesCtrl = $controller('SearchactivitiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchactivitiesCtrl.awesomeThings.length).toBe(3);
  });
});
