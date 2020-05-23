
function mainController($scope, coldef_dashboard, schoolDetailGetAllService, eventDetailGetAllService, rowTemplate, 
		activityGetAllService, councilGetAllService,dashboardMonthlyStatuService,dashboardWeeklyStatusService,dashboardCouncilStatuService,
	eventTypeGetAllService, pocDetailGetAllService, volunteerGetAllService, $location, eventDetailSearchService ,$filter,
	dashboardActivityStatuService,dashboardSchoolStatuService,dashboardEventStatuService) {
	
	$scope.councilDashData=[];
	$scope.schooolDashData=[];
	$scope.eventTypeDashData=[];
	$scope.activityDashData=[];
	
	$scope.councildata=dashboardCouncilStatuService._get();	
	$scope.activitydata=dashboardActivityStatuService._get();	
	$scope.schooldata=dashboardSchoolStatuService._get();	
	$scope.eventdata=dashboardEventStatuService._get();	
	
	$scope.councildata.$promise.then(function(data) {
		angular.forEach(data, function(value, key){
			console.log(value);
		      $scope.councilDashData.push({ 'council': value.council.name,
	    		  'volunteerCount': value.volHoursSpent});
})}, function(data) {
		console.log(data);
	})

	
		$scope.eventdata.$promise.then(function(data) {
		angular.forEach(data, function(value, key){

		    $scope.eventTypeDashData.push({ 'event': value.eventDetails.eventType.typeOfEvent,
				  'volunteerCount': value.volHoursSpent});
})}, function(data) {
		console.log(data);
	})
	
	
	
	
			$scope.activitydata.$promise.then(function(data) {
		angular.forEach(data, function(value, key){
			 
			 $scope.activityDashData.push({ 'activity': value.eventDetails.activity.name,
				  'volunteerCount': value.volHoursSpent});
})}, function(data) {
		console.log(data);
	})
	
	
	
	
			$scope.schooldata.$promise.then(function(data) {
		angular.forEach(data, function(value, key){
		      $scope.schooolDashData.push({ 'school': value.eventDetails.schoolDetails.name,
	    		  'volunteerCount': value.volHoursSpent});
})}, function(data) {
		console.log(data);
	})
	
	
	
	
	 $scope.council = {
	            chart: {
	                type: 'pieChart',
	                height: 250,
	                x: function(d){return d.council;},
	                y: function(d){return d.volunteerCount;},
	                showLabels: true,
	                duration: 500,
	                labelThreshold: 0.01,
	                labelSunbeamLayout: true,
	                legend: {
	                    margin: {
	                        top: 0,
	                        right: 0,
	                        bottom:0,
	                        left: 0
	                    }
	                }
	            }
	        };
	 
	 $scope.school = {
	            chart: {
	                type: 'pieChart',
	                height: 250,
	                x: function(d){return d.school;},
	                y: function(d){return d.volunteerCount;},
	                showLabels: true,
	                duration: 500,
	                labelThreshold: 0.01,
	                labelSunbeamLayout: true,
	                legend: {
	                    margin: {
	                        top: 0,
	                        right: 0,
	                        bottom:0,
	                        left: 0
	                    }
	                }
	            }
	        };
	 
	 $scope.event_type = {
	            chart: {
	                type: 'pieChart',
	                height: 250,
	                x: function(d){return d.event;},
	                y: function(d){return d.volunteerCount;},
	                showLabels: true,
	                duration: 500,
	                labelThreshold: 0.01,
	                labelSunbeamLayout: true,
	                legend: {
	                    margin: {
	                        top: 0,
	                        right: 0,
	                        bottom:0,
	                        left: 0
	                    }
	                }
	            }
	        };
	 
	 $scope.activity = {
	            chart: {
	                type: 'pieChart',
	                height: 250,
	                x: function(d){return d.activity;},
	                y: function(d){return d.volunteerCount;},
	                showLabels: true,
	                duration: 500,
	                labelThreshold: 0.01,
	                labelSunbeamLayout: true,
	                legend: {
	                    margin: {
	                        top: 0,
	                        right: 0,
	                        bottom:0,
	                        left: 0
	                    }
	                }
	            }
	        };

	        $scope.data = [
	            {
	                key2: "One",
	                y: 5
	            },
	            {
	                key2: "Two",
	                y: 2
	            },
	            {
	                key2: "Three",
	                y: 9
	            },
	            {
	                key: "Four",
	                y: 7
	            },
	            {
	                key2: "Five",
	                y: 4
	            },
	            {
	                key2: "Six",
	                y: 3
	            },
	            {
	                key2: "Seven",
	                y: .5
	            }
	        ];
	 
}



angular.module('dashboardcontroller', [])
	.controller('dashboardCtrl', mainController);