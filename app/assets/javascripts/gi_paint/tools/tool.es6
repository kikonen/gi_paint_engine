"use strict";

export const BUTTONS = {
  one: 1
};

export class Tool {
  setCanvas(canvas) {
    this.canvas = canvas;
    this.state = canvas.state;
    this.primary = canvas.primary;
    this.draw = canvas.draw;
    this.loc = this.state.location;
  }

  onMousedown(event) {
    console.log("mouse down");
  }

  onMouseup(event) {
    console.log("mouse up");
  }

  onMousemove(event) {
    console.log("mouse move");
  }

  onTouchmove(event) {
  }

  prepare(event) {
    let ctx = this.draw.getContext(),
        palette = this.state.palette;
    ctx.beginPath();
    ctx.strokeStyle = palette.strokeStyle;
    ctx.lineWidth = palette.lineWidth;
    return ctx;
  }

  getLocation() {
    return this.state.location;
  }

  setLocation(x, y) {
    let loc = this.loc;
    loc.x = x;
    loc.y = y;
  }

  clearLocation() {
    this.setLocation(null, null);
  }

  save(event) {
    let draw = this.draw,
        primary = this.primary,
        c = draw.getCanvas();

    primary.getContext().drawImage(c, 0, 0);
    draw.getContext().clearRect(0, 0, c.width, c.height);
  }

  clear(event) {
    let draw = this.draw,
        c = draw.getCanvas();

    draw.getContext().clearRect(0, 0, c.width, c.height);
  }
}
