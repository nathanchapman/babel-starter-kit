/*!
 * preinstall.js (https://github.com/nathanchapman/babel-starter-kit)
 *
 * This file is used to set up the directory for users who install
 * via npm. It adds the .gitignore and .npmignore files.
 *
 * Copyright (c) 2016 Nathan Chapman.
 * Licensed under the MIT license.
 */

const fs = require('fs');

let npmignore = [
    'coverage',
    'src',
    'test',
    '.babelrc',
    '.codeclimate.yml',
    '.eslintignore',
    '.eslintrc',
    '.gitignore',
    '.istanbul.yml',
    '.jshintrc',
    '.travis.yml',
];

fs.writeFileSync('.npmignore', npmignore.join('\n'));

let gitignore = [
    '# dotfiles',
    '.DS_Store',
    '# generated files',
    'coverage',
    'lib',
    '*.log',
    'node_modules',
    'package-lock.json'
];

fs.writeFileSync('.gitignore', gitignore.join('\n'));

// fs.readFile('package.json', 'utf8', function (err, data) {
//   if (err) return console.log(err);
//   var result = data.replace(/,\s*"preinstall": "node preinstall.js"/g, '');
//   fs.writeFile('package.json', result, 'utf8', function (err) {
//      if (err) return console.log(err);
//   });
// });
//
// fs.unlinkSync('preinstall.js');
