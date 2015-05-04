module GiPaint
  class UiController < GiPaint::EngineController
    layout 'gi_paint/engine'

    def show
#      @show_navbar = false
      @show_breadcrumb = false
      @base_href = GiPaint::Engine.base_href
#      @ng_app = "paint"
    end
  end
end
