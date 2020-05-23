var reportservice = angular.module('reportservice', [ 'ngResource', 'ngRoute' ]);

reportservice.factory("ReportService", function($resource) {
	return $resource("/schooldetail/byid/:id", {
		id : '@id'
	}, {
		_get : {
			method : "GET",
			isArray : true
		}
	});
});



reportservice.factory('xlsReportlService', function($http) {
	 return{
		 _export : function(t) {
	        return $http({
			    url: '/report/viewXLSReport',
			    method: "POST",
			    data: t, 
			    headers: {
			       'Content-type': 'application/json'
			    },
			    responseType: 'arraybuffer'
			})
	    }
	 }
	});


reportservice.factory('xlsUploadService', [ '$resource', function($resource) {
	return $resource('/report/upload', {}, {
		_upload : {
			method : 'POST',
			params : {},
		     transformRequest: angular.identity,
		     headers: { 'Content-Type': undefined ,enctype:'multipart/form-data'},
		     responseType : 'arraybuffer'
		}
	}
	);
} ]);

reportservice.factory('downloadService', [ '$q', '$timeout', '$window', function($q, $timeout, $window) {
	return {
		download : function(id) {
			var defer = $q.defer();
			$timeout(function() {
				$window.location = '/report/view?id=' + id;
			}, 1000)
				.then(function() {
					defer.resolve('success');
				}, function() {
					defer.reject('error');
				});
			return defer.promise;
		}
	};
}
]);