(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', ['$scope', LunchCheckController]);

  function LunchCheckController($scope){
    $scope.lunch = "";
    $scope.customStyle = {};
    $scope.checkLunch = function (){
      var message = calculateNumberOfItems($scope.lunch);
      $scope.message = message;
      if (message === "Too much!" || message === "Enjoy!") {
        $scope.turnGreen();
      }
      else {
        $scope.turnRed();
      }
    };
    $scope.turnGreen = function (){
      $scope.customStyle.style = {"color":"green", "border-color":"green"};
    };
    $scope.turnRed = function() {
      $scope.customStyle.style = {"color":"red", "border-color":"red"};
    };
  }

  function calculateNumberOfItems(string){
    if (string === "")
      return "Please enter data first";
    var array = string.split(",");
    var arrayFiltered = array.filter(v=>v.trim()!='');
    var message = "Enjoy!";
    if (arrayFiltered.length === 0)
      message= "Please enter data first";
    else if (arrayFiltered.length > 3)
      message = "Too much!";
    return message;
  }
})();
