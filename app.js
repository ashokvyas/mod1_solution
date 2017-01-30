(function(){

	'use strict';

	angular.module("LunchCheck", [])

      .controller("LunchCheckController", DIController);
	       LunchCheckController.$inject = ['$scope'];

	       function DIController($scope){
             
              $scope.getMessage=function(inputvalue){
               $scope.validator=false;
    
                 if (inputvalue!=undefined && inputvalue!=''){
                       var arr =inputvalue.split(',');
                       $scope.message=arr.length;
              
                       if(arr.length<=3 && arr.length>0){
             	         $scope.message='Enjoy';

                       }

                       else {
                        
             	          $scope.message='Too Much';

                        }
                }
              else {
             
             	$scope.message='Empty';
              $scope.validator=true;
             }

              if( $scope.message==='Empty'){
                setTimeout(function(){
                   $scope.alert = 'Please enter data first';
                   $scope.$digest();
                },100);
              } else {
                  $scope.alert='';
              }

	         }


	        }


})();


