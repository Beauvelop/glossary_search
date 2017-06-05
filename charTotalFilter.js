angular.module("eggApp1")
  .filter("charTotal", function() {
    return function(text) {
      return text.split('').length;
    }
  })
