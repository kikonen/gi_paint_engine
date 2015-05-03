require "gi_paint/engine"

module GiPaint
end

module GiPaint
  def self.gem_root_dir
    File.expand_path('../..', __FILE__)
  end
end

module GiPaint
  def self.config
    @config ||= RailsConfig.load_files(RailsConfig.setting_files("#{self.gem_root_dir}/config", Rails.env))
  end
end
