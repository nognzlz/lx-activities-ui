'use strict';

/**
 * @ngdoc function
 * @name lxActivitiesUiApp.controller:SearchactivitiesCtrl
 * @description
 * # SearchactivitiesCtrl
 * Controller of the lxActivitiesUiApp
 */
angular.module('lxActivitiesUiApp')
	.controller('SearchactivitiesCtrl', ['$scope', 'activityService', function ($scope, activityService) {
    	$scope.activity = {
    		source: null,
    		city: null,
    		name: null //keyword
    	}

    	$scope.cities = activityService.cities.query();
    	
    	$scope.getActivities = function() {
    		$scope.activities = activityService.activities.query($scope.activity);
    	}

  	}]);