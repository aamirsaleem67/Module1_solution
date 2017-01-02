(function(){

'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', myController);
    myController.$inject=['$scope'];
    function myController($scope)
    {
           $scope.items = "";
           $scope.event = function()
           {
               calculateNumberOfItems($scope.items);
           };

           function calculateNumberOfItems(myitems)
           {
                  var splitarray= myitems.split(",");
                  
                  var myarray= checkEmptyString(splitarray);
                  if(myarray.length == 0)
                  {
                     
                             $scope.message="Please enter data first";
                      
                  }
                  else if(myarray.length <= 3) {
                      $scope.message="Enjoy!";
                  }
                  else{
                     $scope.message = "Too much!";
                  }

           }
           function checkEmptyString(splitarray)
           {
               var myarray=[];
               for(var i =0; i< splitarray.length;i++)
               {
                   if(splitarray[i]=="" ||splitarray[i]==" ")
                   {
                    continue;
                   }
                   else{
                       myarray.push(splitarray[i]);
                   }
               }  
               
              return myarray;
           }

    }
  
})();