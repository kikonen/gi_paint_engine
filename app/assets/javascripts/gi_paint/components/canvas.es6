"use strict";

class Layer {
  constructor(id, canvas) {
    this.id = id;
    this.state = canvas.state;
  }

  getCanvas() {
    this.canvas = this.canvas || document.getElementById(this.id);
    return this.canvas;
  }

  getContext() {
    this.ctx = this.ctx || this.getCanvas().getContext("2d");
    return this.ctx;
  }

  getOffset() {
    if (!this.offset) {
      let rect = this.getCanvas().getBoundingClientRect();
      this.offset = {
        x: rect.left,
        y: rect.top
      };
    }
    return this.offset;
  }
}

class CurrentTool {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = canvas.state;
    this.activeId = null;
  }

  getTool() {
    if (this.activeId !== this.state.toolId) {
      this.tool = null;
      this.activeId = this.state.toolId;
    }

    this.tool = this.tool || this.createTool();
    return this.tool;
  }

  createTool() {
    let tool = this.state.tools[this.activeId].create();
    tool.setCanvas(this.canvas);
    return tool;
  }
}


class CanvasController {
  constructor($scope) {
    this.state = $scope.state;
    this.primary = new Layer("gi-primary-canvas", this);
    this.draw = new Layer("gi-draw-canvas", this);
    this.currentTool = new CurrentTool(this);
  }

  onMousemove(event) {
    this.currentTool.getTool().onMousemove(event);
  }

  onMousedown(event) {
    this.currentTool.getTool().onMousedown(event);
  }

  onMouseup(event) {
    this.currentTool.getTool().onMouseup(event);
  }

  onTouchmove(event) {
    this.currentTool.getTool().onTouchmove(event);
  }

  onTouchend(event) {
    this.currentTool.getTool().onTouchend(event);
  }
}

angular.module('paint')
.directive('giCanvas', () => {
  return {
    restrict: 'E',
    scope: {
      state: '=giState'
    },
    controller: CanvasController,
    controllerAs: 'canvas',
    templateUrl: 'gi_paint/ui/canvas'
  };
})
// @see http://jsfiddle.net/guillaumebiton/R8mmR/6/
.directive('giTouchmove', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      let fn = $parse(attrs.giTouchmove);
      elem.bind('touchmove', (event) => {
        let callback = () => {
          fn(scope, {$event:event});
        };
        scope.$apply(callback);
      });
    }
  };
})
// @see http://jsfiddle.net/guillaumebiton/R8mmR/6/
.directive('giTouchend', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      let fn = $parse(attrs.giTouchend);
      elem.bind('touchend', (event) => {
        let callback = () => {
          fn(scope, {$event:event});
        };
        scope.$apply(callback);
      });
    }
  };
})
;
