'use strict';

/**
 * @ngdoc overview
 * @name lxActivitiesUiApp
 * @description
 * # lxActivitiesUiApp
 *
 * Main module of the application.
 */
angular
  .module('lxActivitiesUiApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/scraper', {
        templateUrl: 'views/scraper.html',
        controller: 'ScraperCtrl',
        controllerAs: 'scraper'
      })
      .when('/searchactivities', {
        templateUrl: 'views/searchactivities.html',
        controller: 'SearchactivitiesCtrl',
        controllerAs: 'searchactivities'
      })
      .otherwise({
        redirectTo: '/scraper'
      });
  })
  .config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }]);