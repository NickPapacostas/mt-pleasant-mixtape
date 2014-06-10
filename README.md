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

     rvm osx-ssl-certs update all

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