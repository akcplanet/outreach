var volunteerservice = angular.module('volunteerservice', [ 'ngResource', 'ngRoute' ]);


volunteerservice.factory('volunteerGetAllService', function ($resource) {
    return $resource('/volunteer', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

volunteerservice.factory('volunteerGetByIdService', function ($resource) {
    return $resource('/volunteer/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

volunteerservice.factory('volunteerAddService', function ($resource) {
    return $resource('/volunteer/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

volunteerservice.factory('volunteerUpdateService', function ($resource) {
    return $resource('/volunteer/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


volunteerservice.factory('volunteerDeleteService', function ($resource) {
    return $resource('/volunteer/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



volunteerservice.factory('volunteerSearchService', function ($resource) {
    return $resource('/volunteer/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
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