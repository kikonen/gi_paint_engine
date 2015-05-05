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
}
