angular.module("eggApp1")
  .directive("rolloff", function() {
    return function(scope, element, attr){
      element.bind('mouseout', function() {
        element.removeClass(attr.rollover);
        console.log("Ahhhh!");
      })
    }
  });
