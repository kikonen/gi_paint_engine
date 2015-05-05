"use strict";

import {Tool} from './tool';

export class Arrow extends Tool {
  onMousemove(event) {
    this.setLocation(event.offsetX, event.offsetY);
  }
}
