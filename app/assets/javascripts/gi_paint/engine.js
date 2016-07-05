//= require angular-touch-1.3.15/angular-touch
//
//= require ./app
//= require ./components/load
//= require ./tools/load
//= require ./paint
//= require ./main
//
//= require_self
//
jQuery(function() {
  "use strict";
  gi.initModule('gi_paint/main');

  // NOTE KI not using @ng_app due to dependency order cycle in es6 module logic
  // => need to tune logic to avoid this
  angular.bootstrap("[data-giapp]", ['paint'], { strictDi: Rails.strictId });
});
