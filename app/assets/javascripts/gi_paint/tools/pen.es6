"use strict";

import {Tool, BUTTONS} from './tool';

export class Pen extends Tool {
  onMousemove(event) {
    let loc = this.getLocation(),
        x = event.offsetX,
        y = event.offsetY;
    if (loc.x && event.which === BUTTONS.one) {
      let ctx = this.prepare(event);
      ctx.moveTo(loc.x, loc.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    this.setLocation(x, y);
  }

  onMouseup(event) {
    this.save(event);
  }

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
          x = Math.round(touch.clientX) - offset.x,
          y = Math.round(touch.clientY) - offset.y;
      if (!loc.x) {
        ctx.moveTo(x, y);
      }
      ctx.lineTo(x, y);
      this.setLocation(x, y);
    }
    ctx.stroke();
  }

  onTouchend(event) {
    this.clearLocation();
  }
}
