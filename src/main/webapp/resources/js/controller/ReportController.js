
function fileModel($parse) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function() {
				scope.$apply(function() {
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
}
;



function reportController($scope, $filter,$http, schoolDetailGetAllService, downloadService, xlsReportlService, Flash, xlsUploadService) {
	
	
	$scope.uploadXLSReport = function(file) {
		var payload = new FormData();
		payload.append("uploadedFile", file);
		xlsUploadService._upload(payload).$promise.then(function(data) {
			console.log(data);
		}, function(data) {
			$scope.uplaodReset();

		})
	}

	$scope.uplaodReset = function() {
		angular.element("input[type='file']").val(null);
	};


	$scope.exportData = function() {
		
		$scope.report.eventDateFrom = ($scope.report.eventDateFrom != null) ? $filter('date')(new Date($scope.report.eventDateFrom),'yyyy-MM-dd') : null,
		$scope.report.eventDateTo = ($scope.report.eventDateTo != null) ? $filter('date')(new Date($scope.report.eventDateTo),'yyyy-MM-dd') : null
		var reportView= $scope.report;
				console.log(reportView)
		xlsReportlService._export(reportView).success(function(data, status, headers, config) {
			var blob = new Blob([ data ], {
				type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			});
			/* var objectUrl = URL.createObjectURL(blob);
			 window.open(objectUrl);*/
			saveAs(blob, "OutReach_Report.xlsx");
			$scope.report.eventDateFrom=null;
			$scope.report.eventDateTo=null;
		}).error(function(data, status, headers, config) {});
	}

}



angular.module('reportcontroller', [])
	.directive('fileModel', fileModel)
	.controller('reportCtrl', reportController);