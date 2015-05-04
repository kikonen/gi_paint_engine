"use strict";

import {Tool} from './tool';

export class Arrow extends Tool {
  consructor() {
    super();
  }

  onMousemove(canvas, event, state) {
    let x = event.offsetX,
        y = event.offsetY;
    state.lastX = x;
    state.lastY = y;
  }
}
