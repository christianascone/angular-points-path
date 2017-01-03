angular.module('demoApp').controller('DemoController', function($scope) {
  var ctrl = this;
  ctrl.data = [];

  function generateRandomData(len, data) {
    for (var i = 0; i < len; i++) {
      var randomWidth = Math.floor(Math.random() * 680);
      var randomHeight = Math.floor(Math.random() * 400);

      var point = {
        x: randomWidth,
        y: randomHeight
      };
      data.push(point);
    }
  };
  
  generateRandomData(5, ctrl.data);
});