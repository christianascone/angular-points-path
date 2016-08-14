angular.module('demoApp').controller('DemoController', function($scope) {
  var ctrl = this;
  ctrl.data = [];

  function generateRandomData(len) {
    for (var i = 0; i < len; i++) {
      var random1 = Math.floor(Math.random() * 400);
      var random2 = Math.floor(Math.random() * 400);

      var point = {
        x: random1,
        y: random2
      };
      ctrl.data.push(point);
    }
  };
  
  generateRandomData(5);
});