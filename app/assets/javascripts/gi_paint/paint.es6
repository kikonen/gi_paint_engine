"use strict";

import {} from './components/palette';
import {} from './components/canvas';
import {Arrow} from './tools/arrow';
import {Pen} from './tools/pen';
import {Rectangle} from './tools/rectangle';

class PaintController {
  constructor($scope, $http, $location, $timeout, Breadcrumb) {
    console.log("paint");
    this.$location = $location;
    this.$timeout = $timeout;
    this.$http = $http;
    this.Breadcrumb = Breadcrumb;

    this.state = {
      palette: {
        strokeStyle: 'blue',
        background_color: 'green',
        lineWidth: 1
      },
      toolId: 1,
      tools: this.createTools()
    };
  }

  createTools() {
    return [
      {
        name: 'Arrow',
        create() {
          return new Arrow();
        }
      },
      {
        name: 'Pen',
        create() {
          return new Pen();
        }
      },
      {
        name: 'Rectangle',
        create() {
          return new Rectangle();
        }
      },
    ];
  }
}

angular.module('paint')
.controller('PaintController', PaintController)
.config(($stateProvider) => {
  $stateProvider
    .state(
      'paint',
      {
        url: '/',
        templateUrl: 'gi_paint/ui/paint',
        controller: PaintController,
        controllerAs: 'paint'
      });
});
