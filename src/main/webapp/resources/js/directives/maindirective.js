var maindirective = angular.module('maindirective',[]);

maindirective.directive('testControl', function() {
    return {
       require: 'ngModel',
       restrict: 'A',
       replace: false,
       transclude: true,
       scope: {
          enabled: "=ngModel"
       },
       link: function (scope, element) {
          if (scope.enabled && element.val().toLowerCase() === 'true') {
             element.nextAll('div.testcontrols').first().show();
          }
           element.bind('click', function() {
               if ( element.val().toLowerCase() === 'true') {
                   element.nextAll('div.testcontrols').first().show();
               } else {
                   element.nextAll('div.testcontrols').first().hide();
               }
           });
          return;
       }
    };
 });

maindirective.directive('modal', function () {
    return {
        restrict: 'EA',
        scope: {
            title: '=modalTitle',
            header: '=modalHeader',
            body: '=modalBody',
            footer: '=modalFooter',
            callbackbuttonleft: '&ngClickLeftButton',
            callbackbuttonright: '&ngClick',
            handler: '=lolo'
        },
        templateUrl: 'partialmodal.html',
        transclude: true,
        controller: function ($scope) {
            $scope.handler = 'pop'; 
        },
    };
});


maindirective.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ buttonClicked }} clicked!!</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });