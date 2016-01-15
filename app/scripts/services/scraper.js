'use strict';

/**
 * @ngdoc service
 * @name lxActivitiesUiApp.scraper
 * @description
 * # scraper
 * Service in the lxActivitiesUiApp.
 */
angular.module('lxActivitiesUiApp')
  .service('scraperService', ['$resource', '$http', function ($resource, $http) {
    this.destinations = $resource('http://localhost:8081/services/retrieveDestinations/:source/:city');
    this.scrape = function(urls, source) {
    	var req = {
			url: 'http://localhost:8081/services/scrapeDestinations/' + source,
			data: {urlList: urls }
    	};
    	$http.post(req.url,req.data).then(function() {
    		alert("scraper succeed");
    	}, function() {
    		alert("scraper failed");
    	});
    };
  }]);
