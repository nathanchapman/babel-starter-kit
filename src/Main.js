/*!
 * Main.js (https://github.com/nathanchapman/babel-starter-kit)
 *
 * Copyright (c) 2016 Nathan Chapman.
 * Licensed under the MIT license.
 */

class Main {
  constructor() {
    this.woo = 'Wooo!';
    this.someOtherMethod = val => val;
  }

  someMethod() {
    return this.woo;
  }
}

export default Main;
