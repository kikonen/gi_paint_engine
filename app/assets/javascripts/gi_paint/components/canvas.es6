"use strict";

class CanvasController {
  constructor($scope) {
    this.state = $scope.state;
    this.activeToolId = null;
  }

  getCanvas() {
    if (!this.canvas) {
      this.canvas = document.getElementById("gi-canvas");
    }
    return this.canvas;
  }

  getContext() {
    this.ctx = this.ctx || this.getCanvas().getContext("2d");
    return this.ctx;
  }

  getTool() {
    if (this.activeToolId !== this.state.toolId) {
      this.tool = null;
    }

    this.tool = this.tool || this.createTool();
    return this.tool;
  }

  createTool() {
    let toolId = this.state.toolId,
        def = this.state.tools[toolId];
    return def.create();
  }

  onMousemove(event) {
    this.getTool().onMousemove(this, event, this.state);
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
