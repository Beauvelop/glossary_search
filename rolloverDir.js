angular.module("eggApp1")
  .directive("rollover", function() {
    return function(scope, element, attrs){
      element.bind('mouseover', function() {
        element.addClass(attrs.rollover);
        console.log("OUCH!!");
      })
    }
  });
