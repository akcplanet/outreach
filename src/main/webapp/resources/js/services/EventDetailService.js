var eventdetailservice = angular.module('eventdetailservice', [ 'ngResource', 'ngRoute' ]);


eventdetailservice.factory('eventDetailGetAllService', function ($resource) {
    return $resource('/eventdetail', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

eventdetailservice.factory('eventDetailGetByIdService', function ($resource) {
    return $resource('/eventdetail/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

eventdetailservice.factory('eventDetailAddService', function ($resource) {
    return $resource('/eventdetail/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

eventdetailservice.factory('eventDetailUpdateService', function ($resource) {
    return $resource('/eventdetail/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


eventdetailservice.factory('eventDetailDeleteService', function ($resource) {
    return $resource('/eventdetail/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



eventdetailservice.factory('eventDetailSearchService', function ($resource) {
    return $resource('/eventdetail/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
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