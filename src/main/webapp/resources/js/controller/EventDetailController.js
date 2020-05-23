'use strict';

function eventDetailAddDialog(){
	return {
		restrict : 'E',
        scope: false,
		replace : true,
		transclude : true,
		link : function(scope) {
			scope.cancel = function() {
				scope.$dismiss('cancel');
			};
		},
		templateUrl	 : '/resources/templates/eventdetails/eventdetails-add-template.html',
	}}



function eventDetailUpdateDialog(){
	return {
		restrict : 'E',
        scope: false,
		replace : true,
		transclude : true,
		link : function(scope) {
			scope.cancel = function() {
				scope.$dismiss('cancel');
			};
		},
		templateUrl	 : '/resources/templates/eventdetails/eventdetails-update-template.html',
	}}

function mainController($rootScope, $scope, $filter,activityGetAllService, councilGetAllService,eventTypeGetAllService,schoolDetailGetAllService, pocDetailGetAllService, volunteerGetAllService ,Flash,$timeout,
		eventDetailSearchService,eventDetailGetByIdService,eventDetailAddService,eventDetailUpdateService,eventDetailDeleteService,eventDetailGetAllService,coldef_eventDetail) {
	
	
	$scope.ActivityName = activityGetAllService._get();
	$scope.CouncilName = councilGetAllService._get();
	$scope.eventDetailData = eventDetailGetAllService._get();
	$scope.EventTypeName = eventTypeGetAllService._get();
	$scope.SchoolName = schoolDetailGetAllService._get();
	$scope.POCDetailName = pocDetailGetAllService._get();
	$scope.VolunteerName = volunteerGetAllService._get();
	
	$scope.eventsSelections=[];

	$scope.eventDetailSearchFn = function() {
		var councilName_id = null;
		var schoolName_id = null;
		var activity_id = null;
		var eventType_id = null;
		var poc1_id = null;
		var poc2_id = null;
		var poc3_id = null;
		var eventDateFrom_id = null;
		var eventDateTo_id = null;
		if ($scope.eventDetailSr != null) {
			councilName_id = ($scope.eventDetailSr.council != null) ? $scope.eventDetailSr.council.id : null,
			schoolName_id = ($scope.eventDetailSr.schoolDetails!=null) ? $scope.eventDetailSr.schoolDetails.id : null,
			activity_id = ($scope.eventDetailSr.activity != null) ? $scope.eventDetailSr.activity.id : null,
			eventType_id = ($scope.eventDetailSr.eventType != null)? $scope.eventDetailSr.eventType.id : null,
			poc1_id = ($scope.eventDetailSr.pocDetailsByPoc1Id != null) ? $scope.eventDetailSr.pocDetailsByPoc1Id.id : null,
			poc2_id = ($scope.eventDetailSr.pocDetailsByPoc2Id != null) ? $scope.eventDetailSr.pocDetailsByPoc2Id.id : null,
			poc3_id = ($scope.eventDetailSr.pocDetailsByPoc3Id != null) ? $scope.eventDetailSr.pocDetailsByPoc3Id.id : null,
			eventDateFrom_id = ($scope.eventDetailSr.eventDateFrom != null) ? $filter('date')(new Date($scope.eventDetailSr.eventDateFrom),'yyyy-MM-dd') : null,
			eventDateTo_id = ($scope.eventDetailSr.eventDateTo != null) ? $filter('date')(new Date($scope.eventDetailSr.eventDateTo),'yyyy-MM-dd') : null
		};

		$scope.eventDetailData = eventDetailSearchService._search(
			{
				councilName : councilName_id,
				schoolName : schoolName_id,
				activity : activity_id,
				eventType : eventType_id,
				poc1 : poc1_id,
				poc2 : poc2_id,
				poc3 : poc3_id,
				eventDateFrom : eventDateFrom_id,
				eventDateTo : eventDateTo_id,
			}
		)
	}

	$scope.eventDetailSearchFn();

	$scope.resetDashBoard= function(){
		$scope.eventDetailSr=null;
	}

	$scope.eventDetailAddFn = function(){
		console.log($scope.eventDetailAdd);
		$scope.eventDetailAdd.eventDate=
			(($scope.eventDetailAdd.eventDate != null) ? $filter('date')(new Date($scope.eventDetailAdd.eventDate),'yyyy-MM-dd') : null)	
			$scope.eventDetailAdd.noOfLivesImpct='0';
			$scope.eventDetailAdd.totalHrs='0';
		eventDetailAddService._add($scope.eventDetailAdd).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.eventDetailUpdateFn=function(){
		eventDetailUpdateService._update(payload).$promise.then(function(data) {
			console.log(data);
			Flash.create('success', 'Hooray!','custom-class');
		}, function(data) {
			console.log(data);
		})
	}
	
	
	$scope.eventDetailDeleteFn=function(){
		var _id2=$scope.eventsSelections[0].id;
		console.log(_id2)
		eventDetailDeleteService._delete({_id :_id2}).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.eventDetailgridOptions = {
			data : 'eventDetailData',
			columnDefs : coldef_eventDetail,
			enablePaging : true,
			showFooter : false,
			showFilter : true,
			checkboxCellTemplate : undefined,
			checkboxHeaderTemplate : undefined,
			pagingOptions : $scope.pagingOptions,
			filterOptions : {
				filterText : "",
				useExternalFilter : false
			},
			afterSelectionChange : function() {
				
			},
			beforeSelectionChange : function() {
				return true;
			},
			enablePinning : true,
			enableRowReordering : true,
			enableRowSelection : true,
			enableSorting : true,
			footerRowHeight : 55,
			headerRowHeight : 30,
			keepLastSelected : true,
			multiSelect : true,
			enableColumnResize : true,
			rowTemplate : rowTemplate,
			selectedItems: $scope.eventsSelections,
			pagingOptions : {
				pageSizes : [ 250, 500, 1000 ],
				pageSize : 250,
				totalServerItems : 0,
				currentPage : 1
			},
			afterSelectionChange: function (data) {
				if ($scope.eventsSelections.length > 0) {
					console.log($scope.eventsSelections);
					}
			},
			rowHeight : 30,
			selectWithCheckboxOnly : true,
			showSelectionCheckbox : true,
			i18n : 'en',
			enableHighlighting : true,
		};

		$scope.selectEnosRow = function() {
			angular.forEach($scope.Details, function(data, index) {
				if (data.name == 'Enos') {
					$scope.gridOptions.selectItem(index, true);
				}
			});
		};
	

}



angular.module('eventdetailcontroller', [])
	.directive('eventDetailAddDialog', eventDetailAddDialog)
	.directive('eventDetailUpdateDialog', eventDetailUpdateDialog)
	.controller('eventdetailCtrl', mainController);