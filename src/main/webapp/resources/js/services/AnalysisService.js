var analysisservice = angular.module('analysisservice', [ 'ngResource', 'ngRoute' ]);


analysisservice.factory('analysisGetAllService', function ($resource) {
    return $resource('/analysis', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

analysisservice.factory('analysisGetByIdService', function ($resource) {
    return $resource('/analysis/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

analysisservice.factory('analysisAddService', function ($resource) {
    return $resource('/analysis/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

analysisservice.factory('analysisUpdateService', function ($resource) {
    return $resource('/analysis/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


analysisservice.factory('analysisDeleteService', function ($resource) {
    return $resource('/analysis/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



analysisservice.factory('analysisSearchService', function ($resource) {
    return $resource('/analysis/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
    		+'&poc1=:poc1&poc2=:poc2&poc3=:poc3&eventDateFrom=:eventDateFrom&eventDateTo=:eventDateTo', {}, {
    	_search: {
            method: 'GET',
            params: {
            	councilName: '@councilName',
            	schoolName: '@schoolName',
            	activity: '@activity',
            	eventType: '@eventType',
            	poc1: '@poc1',
            	poc2: '@poc2',
            	poc3: '@poc3',
            	eventDateFrom: '@eventDateFrom',
            	eventDateTo: '@eventDateTo'	
            },
            isArray: true
        }
    })
});