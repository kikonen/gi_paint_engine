"use strict";

import {Tool, BUTTONS} from './tool';

export class Rectangle extends Tool {
  onMousemove(event) {
    let loc = this.getLocation(),
        x = event.offsetX,
        y = event.offsetY;

    if (event.which === BUTTONS.one) {
      if (loc.x) {
        let c = this.draw.getCanvas(),
            ctx = this.prepare(event);
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.rect(loc.x, loc.y, x - loc.x, y - loc.y);
        ctx.stroke();
      }
    }

    if (loc.x == null) {
      this.setLocation(x, y);
    }
  }

  onMousedown(event) {
    this.clearLocation();
  }

  onMouseup(event) {
    this.clearLocation();
    this.save(event);
  }
}
