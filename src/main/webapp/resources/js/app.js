'use strict';

var orApp = angular.module('outreachApp', [ 'ngRoute', 'activitycontroller', 'analysiscontroller', 'councilcontroller',
	'dashboardcontroller', 'errorcontroller', 'eventdetailcontroller', 'eventtypecontroller', 'pocdetailcontroller', 'reportcontroller',
	'schooldetailcontroller', 'volunteercontroller', 'ngTouch', 'ui.grid', 'ngGrid', 'ngFlash', 'ngAnimate',
	'activityservice', 'analysisservice', 'councilservice', 'dashboardservice', 'errorservice', 'eventdetailservice', 'eventtypeservice',
	'pocdetailservice', 'reportservice', 'schooldetailservice', 'volunteerservice', 'ngSanitize', 'outreachconstant',
	'mainfilter', 'maindirective', 'nvd3', 'columnUtils', 'ngLoadingSpinner', 'ngFileUpload' ]);

orApp.config([ '$routeProvider', '$resourceProvider', 'FlashProvider', '$compileProvider' ,  function($routeProvider, $resourceProvider, FlashProvider ,$compileProvider) {
	$routeProvider.when('/', {
		templateUrl : '/resources/templates/dashboard/dashboard-template.html',
		controller : 'dashboardCtrl'
	}).when('/analysis', {
		templateUrl : '/resources/templates/analysis/analysis-template.html',
		controller : 'analysisCtrl'
	}).when('/report', {
		templateUrl : '/resources/templates/report/report-template.html',
		controller : 'reportCtrl'
	}).when('/eventdetails', {
		templateUrl : '/resources/templates/eventdetails/eventdetails-template.html',
		controller : 'eventdetailCtrl'
	}).when('/schooldetails', {
		templateUrl : '/resources/templates/schooldetails/schooldetails-template.html',
		controller : 'schooldetailCtrl'
	}).when('/volunteersdetails', {
		templateUrl : '/resources/templates/volunteer/volunteer-template.html',
		controller : 'volunteerCtrl'
	}).when('/pocdetails', {
		templateUrl : '/resources/templates/pocdetails/pocdetails-template.html',
		controller : 'pocdetailCtrl'
	}).when('/activitydetails', {
		templateUrl : '/resources/templates/activity/activity-template.html',
		controller : 'activityCtrl'
	}).when('/councildetails', {
		templateUrl : '/resources/templates/council/council-template.html',
		controller : 'councilCtrl'			
	}).when('/eventtype', {
		templateUrl : '/resources/templates/eventtype/eventtype-template.html',
		controller : 'eventtypeCtrl'
	}).otherwise({
		redirectTo : '/'
	});


	$resourceProvider.defaults.stripTrailingSlashes = false;
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
}
]);

orApp.run([ '$rootScope', function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		$rootScope.title = current.$$route.title;
	});
} ]);


orApp.controller('activeCtrl', function($rootScope, $scope, $location) {
	$scope.isActive = function(route) {
		if (route != null) {
			return route === $location.path();
		}
	}
});