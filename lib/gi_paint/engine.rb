module GiPaint
  class Engine < ::Rails::Engine
    isolate_namespace GiPaint
  end
end

class GiPaint::Engine
  def self.mount_path
    "/#{parent.name.underscore}"
  end
end

class GiPaint::Engine
  def self.base_href
    "#{mount_path}/"
  end
end
