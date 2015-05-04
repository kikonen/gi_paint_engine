"use strict";

class Canvas {
  constructor(id, state) {
    this.id = id;
    this.state = state;
  }

  getCanvas() {
    this.canvas = this.canvas || document.getElementById(this.id);
    return this.canvas;
  }

  getContext() {
    this.ctx = this.ctx || this.getCanvas().getContext("2d");
    return this.ctx;
  }
}

class CurrentTool {
  constructor(state) {
    this.state = state;
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
    return this.state.tools[this.activeId].create();
  }
}


class CanvasController {
  constructor($scope) {
    this.state = $scope.state;
    this.primary = new Canvas("gi-primary-canvas", this.state);
    this.draw = new Canvas("gi-draw-canvas", this.state);
    this.currentTool = new CurrentTool(this.state);
  }

  onMousemove(event) {
    this.currentTool.getTool().onMousemove(this, event, this.state);
  }

  onMousedown(event) {
    this.currentTool.getTool().onMousedown(this, event, this.state);
  }

  onMouseup(event) {
    this.currentTool.getTool().onMouseup(this, event, this.state);
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
});
