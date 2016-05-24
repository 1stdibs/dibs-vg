"use strict";

/**
 * Builds the raw_modules directory - each file will be a JS module that uses back ticks to export a multi line string.
 */

const fs = require('fs');
const svgs = fs.readdirSync(process.cwd() + '/src');
const dest = process.cwd() + '/dist/templateString';

svgs.forEach(file => {
    const name = file.split('.')[0];
    const fileName = dest + '/' + name + '.js';
    const leFile = process.cwd() + '/src/' + file;
    const contents = ["module.exports = `", fs.readFileSync(leFile), "`;", "\n"];
    fs.writeFileSync(fileName, contents.join(''), { encoding : 'UTF-8' });
});
