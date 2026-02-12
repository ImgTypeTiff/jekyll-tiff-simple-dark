# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-simple-dark"
  spec.version       = "0.4.0"
  spec.authors       = ["Alfonso Saavedra 'Son Link'"]
  spec.email         = ["sonlink.dourden@gmail.com"]

  spec.summary       = %q{Simple dark theme for Jekyll using Colors palette. http://clrs.cc/}
  spec.homepage      = "https://github.com/son-link/jekyll-simple-dark"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.6"

  spec.add_development_dependency "bundler", "~> 2.3.27"
  spec.add_development_dependency "rake", "~> 10.0"
end
