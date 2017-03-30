"use strict";

const marked = require('marked');
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const md = fs.readFileSync(path.resolve(__dirname, '../CONTRIBUTING.md'), 'utf-8');
let html = marked(md);
html = `module.exports = \`${html}\`;\n`;

console.log(colors.green('Compiling contributing HTML...'));
fs.writeFile(path.resolve(__dirname, '../sample/js/contributing.js'), html, err => {
    if (err) {
        console.log(colors.red('Error attempting to compile CONTRIBUTING.md into HTML.'));
        process.exit(1);
    }
    console.log(colors.green('Compilation complete'));
});
