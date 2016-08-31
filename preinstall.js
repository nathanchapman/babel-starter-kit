/*!
 * preinstall.js (https://github.com/nathanchapman/babel-starter-kit)
 *
 * This file is used to set up the directory for users who install
 * via npm. It adds the .gitignore and .npmignore files.
 *
 * Copyright (c) 2016 Nathan Chapman.
 * Licensed under the MIT license.
 */

var fs = require('fs');

fs.stat('.npmignore', function (err, stat) {
  if (err && err.code == 'ENOENT') {
    fs.writeFile('.npmignore', 'coverage\nsrc\ntest\n.babelrc\n.codeclimate.yml\n.DS_Store\n.eslintignore\n.eslintrc\n.gitignore\n.istanbul.yml\n.jshintrc\n.travis.yml\n');
  }
});

fs.stat('.gitignore', function (err, stat) {
  if (err && err.code == 'ENOENT') {
    fs.writeFile('.gitignore', '# npm\nnode_modules\nnpm-debug.log\n\n# dotfiles\n.DS_Store\n\n# generated files\ncoverage\nlib\n');
  }
});

fs.readFile('package.json', 'utf8', function (err, data) {
  if (err) return console.log(err);
  var result = data.replace(/,\s*"preinstall": "node preinstall.js"/g, '');
  fs.writeFile('package.json', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

fs.unlinkSync('preinstall.js');
