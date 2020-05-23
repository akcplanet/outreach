var pocdetailservice = angular.module('pocdetailservice', [ 'ngResource', 'ngRoute' ]);


pocdetailservice.factory('pocDetailGetAllService', function ($resource) {
    return $resource('/pocdetail', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

pocdetailservice.factory('pocDetailGetByIdService', function ($resource) {
    return $resource('/pocdetail/byid?id=:id', {}, {
    	_get: {
            method: 'GET',
            params: {
            	id: '@id',
            },
            isArray: false
        }
    })
});

pocdetailservice.factory('pocDetailAddService', function ($resource) {
    return $resource('/pocdetail/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

pocdetailservice.factory('pocDetailUpdateService', function ($resource) {
    return $resource('/pocdetail/update?id=:id', {}, {
    	_update: {
            method: 'PUT',
            params: {
            	id: '@id',
            },
            isArray: true
        }
    })
});


pocdetailservice.factory('pocDetailDeleteService', function ($resource) {
    return $resource('/pocdetail/delete?id=:_id', {}, {
    	_delete: {
            method: 'DELETE',
            params: {
            	_id: '@_id'
            },
            isArray: false
        }
    })
});



pocdetailservice.factory('pocDetailSearchService', function ($resource) {
    return $resource('/pocdetail/search?councilName=:councilName&schoolName=:schoolName&activity=:activity&eventType=:eventType'
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