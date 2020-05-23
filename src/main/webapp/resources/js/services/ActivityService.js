var activityservice = angular.module('activityservice', [ 'ngResource', 'ngRoute' ]);


activityservice.factory('activityGetAllService', function ($resource) {
    return $resource('/activity', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

activityservice.factory('activityGetByIdService', function ($resource) {
    return $resource('/activity/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

activityservice.factory('activityAddService', function ($resource) {
    return $resource('/activity/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

activityservice.factory('activityUpdateService', function ($resource) {
    return $resource('/activity/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


activityservice.factory('activityDeleteService', function ($resource) {
    return $resource('/activity/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



activityservice.factory('activitySearchService', function ($resource) {
    return $resource('/activity/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
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