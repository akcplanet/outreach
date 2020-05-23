var eventtypeservice = angular.module('eventtypeservice', [ 'ngResource', 'ngRoute' ]);

eventtypeservice.factory('eventTypeGetAllService', function ($resource) {
    return $resource('/eventtype', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

eventtypeservice.factory('eventTypeGetByIdService', function ($resource) {
    return $resource('/eventtype/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

eventtypeservice.factory('eventTypeAddService', function ($resource) {
    return $resource('/eventtype/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

eventtypeservice.factory('eventTypeUpdateService', function ($resource) {
    return $resource('/eventtype/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


eventtypeservice.factory('eventTypeDeleteService', function ($resource) {
    return $resource('/eventtype/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



eventtypeservice.factory('eventTypeSearchService', function ($resource) {
    return $resource('/eventtype/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
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