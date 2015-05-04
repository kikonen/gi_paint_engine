"use strict";

import {Tool, BUTTONS} from './tool';

export class Rectangle extends Tool {
  onMousemove(canvas, event, state) {
    let x = event.offsetX,
        y = event.offsetY;
    if (event.which === BUTTONS.one) {
      if (state.lastX) {
        let c = canvas.draw.getCanvas(),
            ctx = canvas.draw.getContext(),
            palette = state.palette;
        ctx.beginPath();
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.rect(state.lastX, state.lastY, x - state.lastX, y - state.lastY);
        ctx.strokeStyle = palette.strokeStyle;
        ctx.lineWidth = palette.lineWidth;
        ctx.stroke();
      }
    }

    if (state.lastX == null) {
      state.lastX = x;
      state.lastY = y;
    }
  }

  onMousedown(canvas, event, state) {
    state.lastX = null;
    state.lastY = null;
  }

  onMouseup(canvas, event, state) {
    state.lastX = null;
    state.lastY = null;
    this.save(canvas, event, state);
  }
}
