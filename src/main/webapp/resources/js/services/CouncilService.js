var councilservice = angular.module('councilservice', [ 'ngResource', 'ngRoute' ]);


councilservice.factory('councilGetAllService', function ($resource) {
    return $resource('/council', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

councilservice.factory('councilGetByIdService', function ($resource) {
    return $resource('/council/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

councilservice.factory('councilAddService', function ($resource) {
    return $resource('/council/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

councilservice.factory('councilUpdateService', function ($resource) {
    return $resource('/council/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


councilservice.factory('councilDeleteService', function ($resource) {
    return $resource('/council/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



councilservice.factory('councilSearchService', function ($resource) {
    return $resource('/council/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
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