var dashboardservice = angular.module('dashboardservice', [ 'ngResource', 'ngRoute' ]);


dashboardservice.factory('dashboardCouncilStatuService', function ($resource) {
    return $resource('/dashboard/councilstatus', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
})

dashboardservice.factory('dashboardActivityStatuService', function ($resource) {
    return $resource('/dashboard/activitystatus', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
})

dashboardservice.factory('dashboardSchoolStatuService', function ($resource) {
    return $resource('/dashboard/schoolstatus', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
})

dashboardservice.factory('dashboardEventStatuService', function ($resource) {
    return $resource('/dashboard/eventstatus', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
})





dashboardservice.factory('dashboardWeeklyStatusService', function ($resource) {
    return $resource('/dashboard/weeklyStatus', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

dashboardservice.factory('dashboardMonthlyStatuService', function ($resource) {
    return $resource('/dashboard/monthlyStatus', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});





dashboardservice.factory('dashboardGetAllService', function ($resource) {
    return $resource('/eventdetail', {}, {
    	_get: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});

dashboardservice.factory('dashboardGetByIdService', function ($resource) {
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

dashboardservice.factory('dashboardAddService', function ($resource) {
    return $resource('/eventdetail/add', {}, {
    	_add: {
            method: 'POST',
            params: {},
            isArray: true
        }
    })
});

dashboardservice.factory('dashboardUpdateService', function ($resource) {
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


dashboardservice.factory('dashboardDeleteService', function ($resource) {
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



dashboardservice.factory('dashboardSearchService', function ($resource) {
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