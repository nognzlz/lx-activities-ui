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
    	$scope.activityInput = {
    		source: null,
    		city: null,
    		name: null //keyword
    	};

    	$scope.cities = activityService.cities.query();
    	$scope.sources = activityService.sources.query();

    	//This global value points to the current selected element
    	var target = null;

    	$scope.getActivities = function() {
    		$scope.activities = activityService.activities.query($scope.activityInput);
    	};

    	$scope.getActivity = function(id, event) {
    		$scope.activity = _.find($scope.activities, {'id': id});
    		//if a target is selected the remove the selected class
    		if (target !== null) {
    			target.removeClass('selected');
    		}
    		$(event.target).addClass('selected');
    		//assign new selected element to target
    		target = $(event.target);
    	};

  	}]);