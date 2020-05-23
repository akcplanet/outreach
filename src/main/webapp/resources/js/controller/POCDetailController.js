'use strict';

function pocDetailAddDialog(){
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
		templateUrl	 : '/resources/templates/pocdetails/pocdetails-add-template.html',
	}}



function pocDetailUpdateDialog(){
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
		templateUrl	 : '/resources/templates/pocdetails/pocdetails-update-template.html',
	}}


	
	
function mainController($rootScope, $scope, $filter,Flash,$timeout,coldef_eventDetail,pocDetailSearchService, pocDetailDeleteService, pocDetailUpdateService
		,pocDetailAddService , pocDetailGetAllService ,pocDetailGetByIdService,coldef_POC_Details ) {
	
	
	$scope.POCDetailName = pocDetailGetAllService._get();

    
	
	$scope.pocSelections=[];

	$scope.resetFrom= function(){
		$scope.pocDetails=null;
	}

	$scope.pocDetailAddFn = function(){
		console.log($scope.pocDetailAdd);
		$scope.pocDetailAdd.eventDate=
			(($scope.pocDetailAdd.eventDate != null) ? $filter('date')(new Date($scope.eventDetailAdd.eventDate),'yyyy-MM-dd') : null)	
			$scope.pocDetailAdd.noOfLivesImpct='0';
			$scope.eventDetailAdd.totalHrs='0';
			pocDetailAddService._add($scope.eventDetailAdd).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.pocDetailUpdateFn=function(){
		pocDetailUpdateService._update(payload).$promise.then(function(data) {
			console.log(data);
			Flash.create('success', 'Hooray!','custom-class');
		}, function(data) {
			console.log(data);
		})
	}
	
	
	$scope.pocDetailDeleteFn=function(){
		var _id2=$scope.eventsSelections[0].id;
		console.log(_id2)
		pocDetailDeleteService._delete({_id :_id2}).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.pocDetailgridOptions = {
			data : 'POCDetailName',
			columnDefs : coldef_POC_Details,
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
			selectedItems: $scope.pocSelections,
			pagingOptions : {
				pageSizes : [ 250, 500, 1000 ],
				pageSize : 250,
				totalServerItems : 0,
				currentPage : 1
			},
			afterSelectionChange: function (data) {
				if ($scope.eventsSelections.length > 0) {
					console.log($scope.pocSelections);
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
  

angular.module('pocdetailcontroller',[])
	.directive('pocDetailAddDialog', pocDetailAddDialog)
	.directive('pocDetailUpdateDialog', pocDetailUpdateDialog)
.controller('pocdetailCtrl',mainController);