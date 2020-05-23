'use strict';

function eventTypeAddDialog(){
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
		templateUrl	 : '/resources/templates/eventtype/eventtype-add-template.html',
	}}



function eventTypeUpdateDialog(){
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
		templateUrl	 : '/resources/templates/eventtype/eventtype-update-template.html',
	}}

function mainController($rootScope, $scope, $filter,Flash,$timeout,coldef_Event_Type,eventTypeSearchService,eventTypeDeleteService,eventTypeUpdateService
		,eventTypeAddService , eventTypeGetAllService ,eventTypeGetByIdService ) {
	
	
	$scope.EventTypeName = eventTypeGetAllService._get();
	console.log($scope.EventTypeName);
	$scope.eventTypeSelections=[];
	$scope.resetFrom= function(){
		$scope.eventType=null;
	}

	$scope.eventTypeAddFn = function(){
		console.log($scope.eventDetailAdd);
		$scope.eventTypeAdd.eventDate=
			(($scope.eventDetailAdd.eventDate != null) ? $filter('date')(new Date($scope.eventDetailAdd.eventDate),'yyyy-MM-dd') : null)	
			$scope.eventDetailAdd.noOfLivesImpct='0';
			$scope.eventDetailAdd.totalHrs='0';
			eventTypeAddService._add($scope.eventDetailAdd).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.eventTypeUpdateFn=function(){
		eventTypeUpdateService._update(payload).$promise.then(function(data) {
			console.log(data);
			Flash.create('success', 'Hooray!','custom-class');
		}, function(data) {
			console.log(data);
		})
	}
	
	
	$scope.eventTypeDeleteFn=function(){
		var _id2=$scope.eventsSelections[0].id;
		console.log(_id2)
		eventTypeDeleteService._delete({_id :_id2}).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.eventTypegridOptions = {
			data : 'EventTypeName',
			columnDefs : coldef_Event_Type,
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
			selectedItems: $scope.eventTypeSelections,
			pagingOptions : {
				pageSizes : [ 250, 500, 1000 ],
				pageSize : 250,
				totalServerItems : 0,
				currentPage : 1
			},
			afterSelectionChange: function (data) {
				if ($scope.eventsSelections.length > 0) {
					console.log($scope.eventTypeSelections);
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
  

angular.module('eventtypecontroller',[])
	.directive('eventTypeAddDialog', eventTypeAddDialog)
	.directive('eventTypeUpdateDialog', eventTypeUpdateDialog)
.controller('eventtypeCtrl',mainController);