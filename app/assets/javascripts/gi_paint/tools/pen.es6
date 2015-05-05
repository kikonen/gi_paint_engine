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

  onTouchmove(event) {
    let ctx = this.prepare(event),
        touches = event.originalEvent.changedTouches;

    ctx.beginPath();
    for (var i = 0; i < touches.length; i++) {
      let touch = touches[i],
          x = touch.clientX,
          y = touch.clientY;
      if (i === 0) {
        ctx.moveTo(x, y);
      }
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }


  onMouseup(event) {
    this.save(event);
  }
}
