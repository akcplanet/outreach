'use strict';

function schoolDetailAddDialog(){
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
		templateUrl	 : '/resources/templates/schooldetails/schooldetails-add-template.html',
	}}



function schoolDetailUpdateDialog(){
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
		templateUrl	 : '/resources/templates/schooldetails/schooldetails-update-template.html',
	}}
function mainController($rootScope, $scope, $filter,Flash,$timeout,coldef_eventDetail,schoolDetailSearchService,schoolDetailDeleteService,schoolDetailUpdateService
		,schoolDetailAddService , schoolDetailGetAllService ,schoolDetailGetByIdService,coldef_school_Details ) {	
	
	
	
	$scope.schoolDetailData = schoolDetailGetAllService._get();

    
	
	$scope.schoolSelections=[];


	$scope.resetFrom= function(){
		$scope.schoolDetails=null;
	}

	$scope.schoolDetailAddFn = function(){
		console.log($scope.schoolDetailAdd);
		$scope.schoolDetailAdd.eventDate=
			(($scope.eventDetailAdd.eventDate != null) ? $filter('date')(new Date($scope.eventDetailAdd.eventDate),'yyyy-MM-dd') : null)	
			$scope.eventDetailAdd.noOfLivesImpct='0';
			$scope.eventDetailAdd.totalHrs='0';
			schoolDetailAddService._add($scope.schoolDetailAdd).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.schoolDetailUpdateFn=function(){
		schoolDetailUpdateService._update(payload).$promise.then(function(data) {
			console.log(data);
			Flash.create('success', 'Hooray!','custom-class');
		}, function(data) {
			console.log(data);
		})
	}
	
	
	$scope.schoolDetailDeleteFn=function(){
		var _id2=$scope.schoolSelections[0].id;
		console.log(_id2)
		schoolDetailDeleteService._delete({_id :_id2}).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.schoolDetailgridOptions = {
			data : 'schoolDetailData',
			columnDefs : coldef_school_Details,
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
			selectedItems: $scope.schoolSelections,
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
  

angular.module('schooldetailcontroller',[])
	.directive('schoolDetailAddDialog', schoolDetailAddDialog)
	.directive('schoolDetailUpdateDialog', schoolDetailUpdateDialog)
.controller('schooldetailCtrl',mainController);