"use strict";

import {Tool, BUTTONS} from './tool';

export class Pen extends Tool {
  onMousemove(canvas, event, state) {
    let x = event.offsetX,
        y = event.offsetY;
    if (state.lastX && event.which === BUTTONS.one) {
      let ctx = canvas.getContext(),
          palette = state.palette;
      ctx.moveTo(state.lastX, state.lastY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = palette.strokeStyle;
      ctx.lineWidth = palette.lineWidth;
      ctx.stroke();
    }
    state.lastX = x;
    state.lastY = y;
  }
}
