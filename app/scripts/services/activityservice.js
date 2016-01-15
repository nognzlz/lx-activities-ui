'use strict';

/**
 * @ngdoc service
 * @name lxActivitiesUiApp.activityService
 * @description
 * # activityService
 * Service in the lxActivitiesUiApp.
 */
angular.module('lxActivitiesUiApp')
  .service('activityService', ['$resource', function ($resource) {
    this.activities = $resource('http://localhost:8082/services/activity?source=:source&city=:city&name=:name');
    this.cities = $resource('http://localhost:8082/services/cities');
    this.sources = $resource('http://localhost:8082/services/sources');
  }]);
