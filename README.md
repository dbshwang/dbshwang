# README

## Configuration backend
- `brew install rbenv`
- `rbenv install 2.5.1`
- `rbenv local 2.5.1` or `rbenv global 2.5.1` to default system's version
- `gem install bundle`
- `gem install rails`
- `bundle install`

## Configuration frontend
- Install node
- `npm install -g yarn`
- `cd client && yarn`

## Database
- `rake db:setup`

## Running servers
Procfile.dev will boot up both the backend and frontend servers by running `rake start`.
They should be hosted on `http://localhost:8001`.
If you want to run them on separate consoles for better visibility of the terminal.
Run the following commands in separate sessions:
- `rails s`
- `cd client && npm start`
