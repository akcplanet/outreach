'use strict';

function councilAddDialog(){
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
		templateUrl	 : '/resources/templates/council/council-add-template.html',
	}}



function councilUpdateDialog(){
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
		templateUrl	 : '/resources/templates/council/council-update-template.html',
	}}

function mainController($rootScope, $scope, $filter,Flash,$timeout,coldef_eventDetail,councilSearchService,councilDeleteService,councilUpdateService
		,councilAddService , councilGetAllService ,councilGetByIdService,coldef_Activity ) {

	$scope.counciData = councilGetAllService._get();

	
	$scope.councilSelections=[];

	$scope.resetFrom= function(){
		$scope.councilDetails=null;
	}

	$scope.councilAddFn = function(){
		console.log($scope.eventDetailAdd);
		$scope.councilDetailAdd.eventDate=
			(($scope.councilDetailAdd.eventDate != null) ? $filter('date')(new Date($scope.eventDetailAdd.eventDate),'yyyy-MM-dd') : null)	
		eventDetailAddService._add($scope.eventDetailAdd).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.councilUpdateFn=function(){
		eventDetailUpdateService._update(payload).$promise.then(function(data) {
			console.log(data);
			Flash.create('success', 'Hooray!','custom-class');
		}, function(data) {
			console.log(data);
		})
	}
	
	
	$scope.councilDeleteFn=function(){
		var _id2=$scope.eventsSelections[0].id;
		console.log(_id2)
		eventDetailDeleteService._delete({_id :_id2}).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.councilgridOptions = {
			data : 'counciData',
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
			selectedItems: $scope.councilSelections,
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
    
  

angular.module('councilcontroller',[])
	.directive('councilAddDialog', councilAddDialog)
	.directive('councilUpdateDialog', councilUpdateDialog)
.controller('councilCtrl',mainController);