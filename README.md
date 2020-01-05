# README

Apartments search app with Rails and React


##### Prerequisites

The setups steps expect following tools installed on the system.

- Github
- Ruby [2.7.0](https://www.ruby-lang.org/en/news/2019/12/25/ruby-2-7-0-released/)
- Rails [6.0.2.1](https://rubygems.org/gems/rails/versions/6.0.2)

##### 1. Check out the repository

```bash
git clone git@github.com:gabrieldominguezduran/flatApp.git
```

##### 2. Install dependecies

Run the following commands to install all dependecies

```ruby
bundle install
```

##### 3. Load ans migrate the seed to the database

Run the following commands to do it.

```ruby
rake db:seed
rake db:migrate
```

##### 3. Start the Rails server

You can start the rails server using the command given below.

```ruby
rails s
```

And now you can visit the site with the URL http://localhost:3000

