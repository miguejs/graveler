FROM mpelos/ruby-node:2.4.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN gem install bundler -v 1.11.2 --no-ri --no-rdoc

# Copy just the Gemfile & Gemfile.lock, to be able to install the required gems:
ADD Gemfile* /usr/src/app/

RUN bundle install