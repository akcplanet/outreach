
var rowTemplate ='<div style="height: 100%" ng-class="{red: row.getProperty(\'viewed\') < 1}"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
        '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
       '<div ng-cell></div>' +
       '</div></div>';

var coldef_Volunteer = [
	

	{
		field : 'volunteerId',
		displayName : 'Volunteer Id',
		width : "10%"
	} ,
	
	{
		field : 'volunteerName',
		displayName : 'Volunteer Name',
		width : "10%"
	} ,
	{
		field : 'council.name',
		displayName : 'Council',
		width : "10%"
	} ,
	{
		field : 'eventDetails.schoolDetails.name',
		displayName : 'School Name',
		width : "10%"
	},
	{
		field : 'eventDetails.activity.name',
		displayName : 'Activity',
		width : "10%"
	},

	
	{
		field : 'eventDetails.eventType.typeOfEvent',
		displayName : 'Event Type',
		width : "10%",
		type: 'number'
	} ,
	
	{
		field : 'eventDetails.eventDate',
		displayName : 'Event Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	
	/*{
		field : 'eventDetails.noOfLivesImpct',
		displayName : 'Lives Impcted',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field) | number :0}}</div></div>',
		cellClass: 'text-center'
	}  ,*/
	
	{
		field : 'volHoursSpent',
		displayName : 'Volunteer Hrs',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)| number :0}}</div></div>',
		cellClass: 'text-center'
	} ,
	
	{
		field : 'eventDetails.pocDetailsByPoc1Id.name',
		displayName : 'POC-1',
		width : "10%"
	} ,
	{
		field : 'eventDetails.pocDetailsByPoc2Id.name',
		displayName : 'POC-2',
		width : "10%"
	} ,
	{
		field : 'eventDetails.pocDetailsByPoc3Id.name',
		displayName : 'POC-3',
		width : "10%"
	}  ,
	{
		field : 'createdBy',
		displayName : 'Created By',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)}}</div></div>',
		
	} ,
	{
		field : 'createdDate',
		displayName : 'Created Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	{
		field : 'updatedBy',
		displayName : 'Updated By',
		width : "10%"
	} ,
	{
		field : 'updatedDate',
		displayName : 'Updated Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	}];



var coldef_dashboard = [
	{
		field : 'council.name',
		displayName : 'Council',
		width : "10%"
	} ,
	{
		field : 'schoolDetails.name',
		displayName : 'School Name',
		width : "10%"
	},
	{
		field : 'activity.name',
		displayName : 'Activity',
		width : "10%"
	},

	
	{
		field : 'eventType.typeOfEvent',
		displayName : 'Event Type',
		width : "10%",
		type: 'number'
	} ,
	
	{
		field : 'eventDate',
		displayName : 'Event Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	
	/*{
		field : 'noOfLivesImpct',
		displayName : 'Lives Impcted',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field) | number :0}}</div></div>',
		cellClass: 'text-center'
	}  ,
	*/
	{
		field : 'totalHrs',
		displayName : 'Total Event Hrs',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)| number :0}}</div></div>',
		cellClass: 'text-center'
	} ,
	
	{
		field : 'pocDetailsByPoc1Id.name',
		displayName : 'POC-1',
		width : "10%"
	} ,
	{
		field : 'pocDetailsByPoc2Id.name',
		displayName : 'POC-2',
		width : "10%"
	} ,
	{
		field : 'pocDetailsByPoc3Id.name',
		displayName : 'POC-3',
		width : "10%"
	}  ,
	{
		field : 'createdBy',
		displayName : 'Created By',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)}}</div></div>',
		
	} ,
	{
		field : 'createdDate',
		displayName : 'Created Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	{
		field : 'updatedBy',
		displayName : 'Updated By',
		width : "10%"
	} ,
	{
		field : 'updatedDate',
		displayName : 'Updated Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	}];


var coldef_eventDetail = [
	{
		field : 'council.name',
		displayName : 'Council',
		width : "10%"
	} ,
	{
		field : 'schoolDetails.name',
		displayName : 'School Name',
		width : "10%"
	},
	{
		field : 'activity.name',
		displayName : 'Activity',
		width : "10%"
	},

	
	{
		field : 'eventType.typeOfEvent',
		displayName : 'Event Type',
		width : "10%",
		type: 'number'
	} ,
	
	{
		field : 'eventDate',
		displayName : 'Event Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	
	/*{
		field : 'noOfLivesImpct',
		displayName : 'Lives Impcted',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field) | number :0}}</div></div>',
		cellClass: 'text-center'
	}  ,*/
	
	{
		field : 'totalHrs',
		displayName : 'Total Event Hrs',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)| number :0}}</div></div>',
		cellClass: 'text-center'
	} ,
	
	{
		field : 'pocDetailsByPoc1Id.name',
		displayName : 'POC-1',
		width : "10%"
	} ,
	{
		field : 'pocDetailsByPoc2Id.name',
		displayName : 'POC-2',
		width : "10%"
	} ,
	{
		field : 'pocDetailsByPoc3Id.name',
		displayName : 'POC-3',
		width : "10%"
	}  ,
	{
		field : 'createdBy',
		displayName : 'Created By',
		width : "10%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)}}</div></div>',
		
	} ,
	{
		field : 'createdDate',
		displayName : 'Created Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	{
		field : 'updatedBy',
		displayName : 'Updated By',
		width : "10%"
	} ,
	{
		field : 'updatedDate',
		displayName : 'Updated Date',
		width : "10%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	}];


var coldef_Activity = [
	{
		field : 'name',
		displayName : ' Name',
		width : "18%"
	} ,
	
	{
		field : 'description',
		displayName : 'Description',
		width : "20%"
	} ,
	
	{
		field : 'createdBy',
		displayName : 'Created By',
		width : "15%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)}}</div></div>',
		
	} ,
	{
		field : 'createdDate',
		displayName : 'Created Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	{
		field : 'updatedBy',
		displayName : 'Updated By',
		width : "15%"
	} ,
	{
		field : 'updatedDate',
		displayName : 'Updated Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	}];


var coldef_Event_Type = [
	{
		field : 'typeOfEvent',
		displayName : 'Event Type',
		width : "20%"
	} ,
	
	{
		field : 'description',
		displayName : 'Event Desc',
		width : "18%"
	} ,
	
	{
		field : 'createdBy',
		displayName : 'Created By',
		width : "15%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)}}</div></div>',
		
	} ,
	{
		field : 'createdDate',
		displayName : 'Created Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	{
		field : 'updatedBy',
		displayName : 'Updated By',
		width : "15%"
	} ,
	{
		field : 'updatedDate',
		displayName : 'Updated Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	}];


var coldef_POC_Details = [
	{
		field : 'ctsId',
		displayName : 'CTS ID',
		width : "20%"
	} ,
	
	{
		field : 'name',
		displayName : 'Name',
		width : "18%"
	} ,
	{
		field : 'location',
		displayName : 'Location',
		width : "15%"
	} ,
	{
		field : 'createdBy',
		displayName : 'Created By',
		width : "15%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)}}</div></div>',
		
	} ,
	{
		field : 'createdDate',
		displayName : 'Created Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	{
		field : 'updatedBy',
		displayName : 'Updated By',
		width : "15%"
	} ,
	{
		field : 'updatedDate',
		displayName : 'Updated Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	}];


var coldef_school_Details = [
	{
		field : 'name',
		displayName : 'School Name',
		width : "20%"
	} ,
	
	{
		field : 'location',
		displayName : 'Location',
		width : "18%"
	} ,
	{
		field : 'createdBy',
		displayName : 'Created By',
		width : "15%",
		cellTemplate: '<div class="ngCellText"><div ng-class="green">{{row.getProperty(col.field)}}</div></div>',
		
	} ,
	{
		field : 'createdDate',
		displayName : 'Created Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	} ,
	{
		field : 'updatedBy',
		displayName : 'Updated By',
		width : "15%"
	} ,
	{
		field : 'updatedDate',
		displayName : 'Updated Date',
		width : "15%",
		cellFilter: 'date:\'dd-MMM-yyyy\'' ,
		cellClass: 'text-center'
	}];




angular.module("columnUtils", [])
.value('rowTemplate', rowTemplate)
.value('coldef_Activity', coldef_Activity)
.value('coldef_Event_Type', coldef_Event_Type)
.value('coldef_POC_Details', coldef_POC_Details)
.value('coldef_school_Details', coldef_school_Details)


.value('coldef_Volunteer', coldef_Volunteer)
.value('coldef_eventDetail', coldef_eventDetail)
	.value('coldef_dashboard', coldef_dashboard);

