# Babel Starter Kit
[![npm](https://img.shields.io/npm/v/babel-starter-kit.svg)](https://www.npmjs.com/package/babel-starter-kit) [![Build Status](https://travis-ci.org/nathanchapman/babel-starter-kit.svg?branch=master)](https://travis-ci.org/nathanchapman/babel-starter-kit) [![Coverage Status](https://coveralls.io/repos/github/nathanchapman/babel-starter-kit/badge.svg?branch=master)](https://coveralls.io/github/nathanchapman/babel-starter-kit?branch=master) [![Code Climate](https://codeclimate.com/github/nathanchapman/babel-starter-kit/badges/gpa.svg)](https://codeclimate.com/github/nathanchapman/babel-starter-kit)

This is my personal starter kit for writing node modules in ES6/ES2015.

It comes with:
* Babel (for transpiling ES6)
* Mocha & Chai (for test suites and assertions)
* Eslint w/ Airbnb config (for cleaner code)
* TravisCI, Coveralls, and CodeClimate configs
* Initial files and unit tests
* npm scripts for linting, testing, and building

## Installation
#### Git
```sh
$ git clone https://github.com/nathanchapman/babel-starter-kit.git
```

#### Bower
```sh
$ bower install babel-starter-kit
```

#### Npm
```sh
$ npm install babel-starter-kit
```

## Scripts
`start` runs src/example.js in the babel-node environment

`build` compiles your library to `lib/`

`lint` runs your code in `src/` through eslint with the Airbnb preset

`test` runs your unit tests in `test/` with Mocha

`test:watch` same as `test` script but watches for changes in a REPL

`test:cover` runs your unit tests with code coverage and outputs to the `coverage/` directory

`coveralls` is only used by Travis CI to publish coverage reports to coveralls
