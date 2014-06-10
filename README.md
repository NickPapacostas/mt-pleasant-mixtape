== README

General (osx)
---------------------

### Homebrew
  Install [homebrew](http://mxcl.github.io/homebrew/)

  (Note: it will direct you to install the Apple Xcode command line tools)

### Git
    brew install git


### Ruby Version Manager
  Install [rvm](https://rvm.io/)

### Heroku toolbelt
    https://toolbelt.heroku.com/

### Ruby 1.9.3
    rvm install 2.0.0-p353

### Postgres
    brew install postgres
    initdb /usr/local/var/postgres -E utf8

The Project
-----------------

### Clone the Repo
    git clone https://github.com/NickPapacostas/mt-pleasant-mixtape.git
    cd mt-pleasant-mixtape

### Bundler
    gem install bundler
    bundle install


### Create the Databases

    rake db:drop:all db:create:all db:schema:load
    rake db:seed

If the seed fails, running db:reset instead may work:

    rake db:reset


### Getting Some Data
    heroku pgbackups:url
    navigate to the that url
    mv ~/Downloads/DUMP_ID.dump tmp/production.dump
    pg_restore --verbose --clean --no-acl --no-owner -h localhost -d mt_pleasant_mixtape_development tmp/production.dump

### Run the app
    rails s