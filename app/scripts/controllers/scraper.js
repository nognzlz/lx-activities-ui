'use strict';

/**
 * @ngdoc function
 * @name lxActivitiesUiApp.controller:ScraperCtrl
 * @description
 * # ScraperCtrl
 * Controller of the lxActivitiesUiApp
 */
angular.module('lxActivitiesUiApp')
  .controller('ScraperCtrl' , ['$scope', 'scraperService', function ($scope, scraperService) {
    $scope.data = {
    	source: null,
    	city: null,
    };

    $scope.destinationUrls = {};

    $scope.retrieveDestinations = function() {
    	$scope.destinations = scraperService.destinations.query($scope.data);
    };

    $scope.scrapeDestinations = function() {
    	var urls = _.pickBy($scope.destinationUrls);
    	scraperService.scrape(_.keysIn(urls), $scope.data.source);
    };
  }]);