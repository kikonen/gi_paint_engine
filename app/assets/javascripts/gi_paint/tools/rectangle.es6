"use strict";

import {Tool} from './tool';

export class Rectangle extends Tool {
  onPenMove(state, loc) {
    let orig = loc.original,
        curr = loc.current,
        c = this.draw.getCanvas();

    let ctx = this.prepare(state);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.rect(orig.x, orig.y, curr.x - orig.x, curr.y - orig.y);
    ctx.stroke();
  }
}
