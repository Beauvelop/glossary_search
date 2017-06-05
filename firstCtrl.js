angular.module("eggApp1")
  .controller("firstCtrl", function($scope, FacData) {
    $scope.data = FacData;
    $scope.reversedCap = function(message) {
      return message.split('').reverse().join('').toUpperCase();
    }
  })
