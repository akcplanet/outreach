'use strict';
function mainController($scope,GetAllSchoolService) {
    $scope.student = {
       firstName: "Mahesh",
       lastName: "Parashar",
       fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
       }
    };
     
    $scope.ctrlName= GetAllSchoolService._get();
    console.log($scope.ctrlName);
    
    /* Chart options  https://krispo.github.io/angular-nvd3/#/quickstart*/
    $scope.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

    /* Chart data */
    $scope.data = [
        {
            key: "One",
            y: 5
        },
        {
            key: "Two",
            y: 2
        },
        {
            key: "Three",
            y: 9
        },
        {
            key: "Four",
            y: 7
        },
        {
            key: "Five",
            y: 4
        },
        {
            key: "Six",
            y: 3
        },
        {
            key: "Seven",
            y: .5
        }
    ];
    

    $scope.friends = [
        {
            id: 1,
            name: "Kim"
        },
        {
            id: 2,
            name: "Sarah"
        },
        {
            id: 3,
            name: "Joanna"
        },
        {
            id: 4,
            name: "Tricia"
        },
        {
            id: 5,
            name: "Anna"
        }
    ];
    
    
} 
    
  

angular.module('errorcontroller',[])
.controller('errorCtrl',mainController);