angular.module("eggApp1")
  .controller("wordDataCtrl", function($scope, wordFacservice) {
    $scope.data = wordFacservice.vocab;
  })
