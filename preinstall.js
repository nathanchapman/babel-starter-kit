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

fs.unlinkSync('preinstall.js');
fs.unlinkSync('prepublish.js');
fs.unlinkSync('package.json'); // hmmmm
console.log('Run `npm init` to create your package.json');
