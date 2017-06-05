angular.module("eggApp1")
  .controller("secondCtrl", function($scope, FacData) {
    $scope.data = FacData;
  })
