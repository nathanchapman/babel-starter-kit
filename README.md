# Babel Starter Kit
[![npm](https://img.shields.io/npm/v/babel-starter-kit.svg)](https://www.npmjs.com/package/babel-starter-kit) [![Build Status](https://travis-ci.org/nathanchapman/babel-starter-kit.svg?branch=master)](https://travis-ci.org/nathanchapman/babel-starter-kit) [![Coverage Status](https://coveralls.io/repos/github/nathanchapman/babel-starter-kit/badge.svg?branch=master)](https://coveralls.io/github/nathanchapman/babel-starter-kit?branch=master) [![Code Climate](https://codeclimate.com/github/nathanchapman/babel-starter-kit/badges/gpa.svg)](https://codeclimate.com/github/nathanchapman/babel-starter-kit)

This is my personal starter kit for writing node modules in ES6/ES2015.

It comes with:
* Babel (for transpiling ES6)
* Mocha & Chai (for test suites and assertions)
* Eslint w/ Airbnb config (for cleaner code)
* TravisCI, Coveralls, and CodeClimate configs
* Initial files and unit tests
* Npm scripts for linting, testing, and building

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

`build` compiles your library to `lib/` for publishing

`lint` runs your code in `src/` through eslint with the Airbnb preset

`test` runs your unit tests in `test/` with Mocha

`test:watch` same as `test` script but watches for changes to your files and waits in a REPL

`test:cover` runs your unit tests with code coverage and outputs to `coverage/`

`coveralls` is only used by Travis CI to publish coverage reports to coveralls

## Additional Features
All of the features below are free for open source projects.

#### Travis CI
Travis CI is a continuous integration build system. You push changes to your repo, it makes sure those changes didn't break anything. To further improve this feedback, you want to strive for the highest amount of code coverage possible, which just means writing quality unit tests. Travis runs builds on all branches, which is great for pull requests and feature branches. Included is a `.travis.yml` file which instructs Travis to lint your code, run unit tests in several different Node.js environments, and report the coverage back to Coveralls.
We've provided the configs, just head over to [travis-ci.org](http://travis-ci.org) to add your repo.

#### Coveralls
Coveralls is just a web service to help you track your coverage over time. This integrates nicely with Greenkeeper, which we'll talk about next.

#### Greenkeeper
Greenkeeper is an automated dependency management service. It keeps your dependencies up to date by creating pull requests. Because you have Travis CI and Coveralls set up, you'll now see information about the builds and code coverage on your pull requests. This will prevent dependency updates from breaking your builds and Greenkeeper will provide suggestions on how to fix these issues. Manually updating your dependencies or using explicit dependency versions are no longer necessary. See [PR #1](https://github.com/nathanchapman/babel-starter-kit/pull/1) for a good example.

#### CodeClimate
CodeClimate provides analytics about your code and ultimately provides grades for each file with suggestions on improving. We've provided the configs, just head over to [codeclimate.com](http://codeclimate.com) to add your repo.
