== README

This app was meant to support the Mt. Pleasant Mixtape initiative. It uses Rails on the backend and Angular on the front end. One major goal was to have a music player that stayed with you (uninterrupted) as you browsed the bands, which is why we used Angular. I didn't do the design! All props go to Spence Nelson. Has a nice active admin cms backend too. Unfortunately the whole thing never really came together (thus the unrelated playlist in the menu player) but it was a lot of fun to work on. 

See how far it came here: http://mt-pleasant-mixtape.herokuapp.com/#/homepage



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
    run the two commands at the end of the brew install output (or run `brew info postgres` to see the message again)
    initdb /usr/local/var/postgres -E utf8


The Project
-----------------

### Clone the Repo
    git clone https://github.com/NickPapacostas/mt-pleasant-mixtape.git
    cd mt-pleasant-mixtape

### Bundler
    gem install bundler
    bundle install

### Generate a secret key
    rake secret
    export SECRET_KEY_BASE=OUTPUT_OF_LAST_COMMAND
    (replace OUTPUT_OF_LAST_COMMAND with result of rake secret)


### Create the Databases

    rake db:drop:all db:create:all db:schema:load
    rake db:seed

If the seed fails, running db:reset instead may work:

    rake db:reset


### Getting Some Data
    heroku pgbackups:url
    navigate to the that url (in a browser)
    mkdir tmp
    mv ~/Downloads/DUMP_ID.dump tmp/production.dump
    pg_restore --verbose --clean --no-acl --no-owner -h localhost -d mt_pleasant_mixtape_development tmp/production.dump

### Run the app
    rails s
    navigate to localhost:3000
