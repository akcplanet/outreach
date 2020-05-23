'use strict';

function activityAddDialog(){
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
		templateUrl	 : '/resources/templates/activity/activity-add-template.html',
	}}



function activityUpdateDialog(){
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
		templateUrl	 : '/resources/templates/eventdetails/activity-update-template.html',
	}}

function mainController($rootScope, $scope, $filter,Flash,$timeout,coldef_eventDetail,activitySearchService,activityDeleteService,activityUpdateService
		,activityAddService , activityGetAllService ,activityGetByIdService ,coldef_Activity) {
	
	
	$scope.activityDetailData = activityGetAllService._get();


	$scope.activitySelections=[];


	$scope.resetFrom= function(){
		$scope.activityDetails=null;
	}

	$scope.activityDetailAddFn = function(){
		console.log($scope.eventDetailAdd);
		$scope.eventDetailAdd.eventDate=
			(($scope.eventDetailAdd.eventDate != null) ? $filter('date')(new Date($scope.eventDetailAdd.eventDate),'yyyy-MM-dd') : null)	
			$scope.eventDetailAdd.noOfLivesImpct='0';
			$scope.eventDetailAdd.totalHrs='0';
			activityAddService._add($scope.eventDetailAdd).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.activityDetailUpdateFn=function(){
		activityUpdateService._update(payload).$promise.then(function(data) {
			console.log(data);
			Flash.create('success', 'Hooray!','custom-class');
		}, function(data) {
			console.log(data);
		})
	}
	
	
	$scope.activityDetailDeleteFn=function(){
		var _id2=$scope.eventsSelections[0].id;
		console.log(_id2)
		activityDeleteService._delete({_id :_id2}).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.activityDetailgridOptions = {
			data : 'activityDetailData',
			columnDefs : coldef_Activity,
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
	
};


angular.module('activitycontroller', [])
		.directive('activityAddDialog', activityAddDialog)
	.directive('activityUpdateDialog', activityUpdateDialog)
	.controller('activityCtrl', mainController);