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

  save(canvas, event, state) {
    let draw = canvas.draw,
        primary = canvas.primary,
        c = draw.getCanvas();

    primary.getContext().drawImage(c, 0, 0);
    draw.getContext().clearRect(0, 0, c.width, c.height);
  }

  clear(canvas, event, state) {
    let draw = canvas.draw,
        c = draw.getCanvas();

    draw.getContext().clearRect(0, 0, c.width, c.height);
  }
}
