/*!
 * prepublish.js (https://github.com/nathanchapman/babel-starter-kit)
 *
 * This file is used to set up the npm package for publishing.
 * It empties the contents of the .npmignore file.
 *
 * Copyright (c) 2016 Nathan Chapman.
 * Licensed under the MIT license.
 */

const fs = require('fs');

fs.writeFileSync('.npmignore', 'coverage');
