"use strict";

import {Tool} from './tool';

export class Pen extends Tool {
  onPenMove(state, loc) {
    let prev = loc.previous,
        curr = loc.current;
    if (prev.x) {
      let ctx = this.prepare(state);
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(curr.x, curr.y);
      ctx.stroke();
    }
  }
////////////
  onTouchmove(event) {
    let ctx = this.prepare(event),
        loc = this.getLocation(),
        offset = this.draw.getOffset(),
        touches = event.originalEvent.changedTouches;

    ctx.beginPath();
    if (loc.x) {
      ctx.moveTo(loc.x, loc.y);
    }
    for (var i = 0; i < touches.length; i++) {
      let touch = touches[i],
          x = Math.round(touch.clientX - offset.x),
          y = Math.round(touch.clientY - offset.y);
      if (!loc.x) {
        ctx.moveTo(x, y);
      }
      ctx.lineTo(x, y);
      this.setLocation(x, y);
    }
    ctx.stroke();
  }
}
