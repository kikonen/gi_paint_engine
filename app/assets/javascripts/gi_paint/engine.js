//= require angular-touch-1.3.15/angular-touch
//
//= require_self
//= require ./main
//= require_tree ./
"use strict";
jQuery(function() {
  System.get('gi_paint/main');

  // NOTE KI not using @ng_app due to dependency order cycle in es6 module logic
  // => need to tune logic to avoid this
  angular.bootstrap(document, ['paint'], { strictDi: Rails.strictId });
});
