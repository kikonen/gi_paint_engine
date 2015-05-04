"use strict";

import {Tool, BUTTONS} from './tool';

export class Pen extends Tool {
  onMousemove(canvas, event, state) {
    let x = event.offsetX,
        y = event.offsetY;
    if (state.lastX && event.which === BUTTONS.one) {
      let ctx = canvas.draw.getContext(),
          palette = state.palette;
      ctx.beginPath();
      ctx.moveTo(state.lastX, state.lastY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = palette.strokeStyle;
      ctx.lineWidth = palette.lineWidth;
      ctx.stroke();
    }
    state.lastX = x;
    state.lastY = y;
  }

  onMouseup(canvas, event, state) {
    let draw = canvas.draw,
        primary = canvas.primary,
        c = draw.getCanvas();

    primary.getContext().drawImage(c, 0, 0);
    draw.getContext().clearRect(0, 0, c.width, c.height);
  }
}
