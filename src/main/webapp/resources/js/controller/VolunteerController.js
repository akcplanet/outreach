'use strict';

function volunteerAddDialog(){
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
		templateUrl	 : '/resources/templates/volunteer/volunteer-add-template.html',
	}}



function volunteerUpdateDialog(){
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
		templateUrl	 : '/resources/templates/volunteer/volunteer-update-template.html',
	}}
function mainController($rootScope, $scope, $filter,Flash,$timeout,coldef_eventDetail,volunteerSearchService,volunteerDeleteService,volunteerUpdateService
		,volunteerAddService , volunteerGetAllService ,volunteerGetByIdService,coldef_Volunteer ) {
	
	
	$scope.VolunteerName = volunteerGetAllService._get();
	console.log($scope.VolunteerName );
	
	$scope.volunteerSelections=[];

	
	$scope.volunteerAddFn = function(){
		console.log($scope.eventDetailAdd);
		$scope.volunteerAdd.eventDate=
			(($scope.eventDetailAdd.eventDate != null) ? $filter('date')(new Date($scope.eventDetailAdd.eventDate),'yyyy-MM-dd') : null)	
			$scope.eventDetailAdd.noOfLivesImpct='0';
			$scope.eventDetailAdd.totalHrs='0';
			volunteerAddService._add($scope.eventDetailAdd).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.volunteerUpdateFn=function(){
		volunteerUpdateService._update(payload).$promise.then(function(data) {
			console.log(data);
			Flash.create('success', 'Hooray!','custom-class');
		}, function(data) {
			console.log(data);
		})
	}
	
	
	$scope.volunteerDeleteFn=function(){
		var _id2=$scope.volunteerSelections[0].id;
		console.log(_id2)
		volunteerDeleteService._delete({_id :_id2}).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			console.log(data);
		})
	}
	
	$scope.volunteerDetailgridOptions = {
			data : 'VolunteerName',
			columnDefs : coldef_Volunteer,
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
					console.log($scope.volunteerSelections);
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
  

angular.module('volunteercontroller',[])
	.directive('volunteerAddDialog', volunteerAddDialog)
	.directive('volunteerUpdateDialog', volunteerUpdateDialog)
.controller('volunteerCtrl',mainController);