angular.module('angular-points-path', []);

angular.module('angular-points-path')
  .controller('angularPointsPathController', function($scope) {
    var ctrl = this;
    ctrl.container = {};

    ctrl.data = ctrl.pointsData;

    /**
     * Adds a point to data list and draw it
     * on canvas
     * 
     * @param {Point data}
     */
    ctrl.addPoint = function(point) {
      var x = point.x;
      var y = point.y;
      var value = point.value;

      var id = 0;
      if (ctrl.data.length > 0) {
        id = ctrl.data[ctrl.data.length - 1].id + 1;
      }
      var p = {
        id: id,
        x: x,
        y: y,
        value: value
      };
      ctrl.data.push(p);
      x = '';
      y = '';
      value = '';
      drawData(ctrl.data);
    };

    /**
     * Remove a point from list and canvas
     * 
     * @param  {Point to remove}
     * @return {void}
     */
    ctrl.removePoint = function(point) {
      console.log(point);
      for (var i = 0; i < ctrl.data.length; i++) {
        if (ctrl.data[i].id === point.id) {
          console.log("removing item at position: " + i);
          ctrl.data.splice(i, 1);
        }
      }

      ctrl.context.clearRect(0, 0, ctrl.canvas.width, ctrl.canvas.height);
      drawData(ctrl.data);
      console.log(ctrl.data);
    }

    /**
     * Draws a list of points and connect them with line
     * 
     * @param  {List of points}
     * @return {void}
     */
    function drawData(data) {
      for (var i = 0; i < data.length; i++) {
        drawDotOnCanvas(data[i]);
        if (i > 0) {
          drawLineOnCanvas(data[i], data[i - 1]);
        }
      }
    }

    /**
     * Draws a dot with given data.
     * The argument data must be {x: xPos, y: yPos, value: radius}
     * 
     * @param  {Point data for drawing}
     * @return {void}
     */
    function drawDotOnCanvas(data) {
      ctrl.context.beginPath();
      ctrl.context.arc(data.x, data.y, data.value, 0, 2 * Math.PI, false);
      ctrl.context.fillStyle = "#ccddff";
      ctrl.context.fill();
      ctrl.context.lineWidth = 1;
      ctrl.context.strokeStyle = "#666666";
      ctrl.context.stroke();
    }

    /**
     * Draws a line between two points, passed as arguments
     * 
     * @param  {First point}
     * @param  {Second point}
     * @return {void}
     */
    function drawLineOnCanvas(data1, data2) {
      ctrl.context.beginPath();
      ctrl.context.moveTo(data1.x, data1.y);
      ctrl.context.lineTo(data2.x, data2.y);
      ctrl.context.strokeStyle = "black";
      ctrl.context.stroke();
    }

    /**
     * Setup the canvas size.
     * It checks the parent element size for the
     * canvas size.
     * Whether width and height are in directive binding,
     * they override them.
     * 
     * @return {void}
     */
    ctrl.setupSize = function() {
      ctrl.container = ctrl.canvas.parentElement.parentElement;

      // Set canvas style
      var width = "100%";
      var height = "100%";
      ctrl.canvas.width = width;
      ctrl.canvas.height = height;

      // Container size used for canvas
      if (ctrl.container.style.width && ctrl.container.style.height) {
        ctrl.canvas.width = ctrl.container.style.width.replace("px", "");
        ctrl.canvas.height = ctrl.container.style.height.replace("px", "");
      }
      // Set specific width and height if available
      if (ctrl.width && ctrl.height) {
        ctrl.canvas.width = ctrl.width;
        ctrl.canvas.height = ctrl.height;
      }
    }

    ctrl.init = function() {
      // If not available, the default value (point radius) is 10
      for (var i = 0; i < ctrl.data.length; i++) {
        var value = ctrl.data[i].value;
        if (!value) {
          value = 10;
        }
        ctrl.data[i].value = value;
      }
      ctrl.canvas = document.getElementById('angular-points-path_canvas');
      ctrl.context = ctrl.canvas.getContext('2d');
      ctrl.setupSize();

      ctrl.context.globalAlpha = 1.0;
      ctrl.context.beginPath();
      drawData(ctrl.data);
    }

    ctrl.init();

  })
  .directive('angularPointsPath', function() {
    return {
      restrict: 'E',
      bindToController: {
        'pointsData': '=',
        'width': '=',
        'height': '='
      },
      template: '<canvas id="angular-points-path_canvas" style="border: 1px gray solid; float: left"></canvas>',
      controller: 'angularPointsPathController',
      controllerAs: 'angularPointsPathCtrl'
    };
  });