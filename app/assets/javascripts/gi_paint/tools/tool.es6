"use strict";

export const BUTTONS = {
  one: 1
};

export class Tool {
  constructor() {
    this.canvas = null;
  }

  onMousedown(canvas, event, state) {
    console.log("mouse down");
  }

  onMouseup(canvas, event, state) {
    console.log("mouse up");
  }

  onMousemove(canvas, event, state) {
    console.log("mouse move");
  }
}
