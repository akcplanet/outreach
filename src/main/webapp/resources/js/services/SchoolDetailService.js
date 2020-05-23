var schooldetailservice = angular.module('schooldetailservice', [ 'ngResource', 'ngRoute' ]);


schooldetailservice.factory('schoolDetailGetAllService', function ($resource) {
    return $resource('/schooldetail', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

schooldetailservice.factory('schoolDetailGetByIdService', function ($resource) {
    return $resource('/schooldetail/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

schooldetailservice.factory('schoolDetailAddService', function ($resource) {
    return $resource('/schooldetail/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

schooldetailservice.factory('schoolDetailUpdateService', function ($resource) {
    return $resource('/schooldetail/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


schooldetailservice.factory('schoolDetailDeleteService', function ($resource) {
    return $resource('/schooldetail/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



schooldetailservice.factory('schoolDetailSearchService', function ($resource) {
    return $resource('/schooldetail/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
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