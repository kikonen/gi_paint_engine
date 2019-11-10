$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "gi_paint/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "gi_paint_engine"
  s.version     = GiPaint::VERSION
  s.authors     = ["Kari Ikonen"]
  s.email       = ["mr.kari.ikonen@gmail.com"]
  s.homepage    = "https://github.com/kikonen/gi_paint_engine"
  s.summary     = "gi_paint_engine"
  s.description = "gi_paint_engine"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", ">= 6.0.0"

  s.add_development_dependency "sqlite3"
end
