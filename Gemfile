# frozen_string_literal: true

source 'https://rubygems.org'
ruby '2.5.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Rails
gem 'rails', '~> 5.0.1'

# Server
gem 'pg'
gem 'puma', '~> 4.3'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'foreman', '~> 0.82.0'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# ActiveAdmin
gem 'activeadmin', github: 'activeadmin'
gem 'devise', '> 4.x'
gem 'inherited_resources', git: 'https://github.com/activeadmin/inherited_resources'
