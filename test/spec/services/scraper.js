'use strict';

describe('Service: scraper', function () {

  // load the service's module
  beforeEach(module('lxActivitiesUiApp'));

  // instantiate service
  var scraper;
  beforeEach(inject(function (_scraper_) {
    scraper = _scraper_;
  }));

  it('should do something', function () {
    expect(!!scraper).toBe(true);
  });

});
