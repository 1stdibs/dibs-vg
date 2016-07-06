"use strict";

/**
 * Builds the raw_modules directory - each file will be a JS module that uses back ticks to export a multi line string.
 */

const fs = require('fs');
const htmlToReact = require('./htmlToReact');
const babel = require('babel-core');
const svgs = fs.readdirSync(process.cwd() + '/src');
const stringDest = `${process.cwd()}/dist/templateString`;
const reactDest = `${process.cwd()}/dist/react`;
// a function to end process to prevent prepublish from completing if an error is encountered :
const checkError = err => {
    if (err) {
        throw err;
    }
};

let remaining = svgs.length;

const promises = [];

svgs.forEach(file => {
    const leFile = `${process.cwd()}/src/${file}`;
    const name = file.split('.')[0];

    const contents = fs.readFileSync(leFile, {encoding: 'UTF-8'});

    // generate template string module :
    const stringContents = `module.exports = \`${contents}\`;`;

    fs.writeFileSync(`${stringDest}/${name}.es.js`, stringContents, { encoding : 'UTF-8' });

    // generate react module :
    promises.push( new Promise((resolve, reject) => {
        htmlToReact(contents).then(result => {
            console.log(`compiling react component for ${name}. ${remaining} files left`);
            remaining --;

            const babelResult = babel.transform(result, {presets: ["es2015", "stage-2", "react"]});
            fs.writeFileSync(`${reactDest}/${name}.js`, babelResult.code, { encoding : 'UTF-8' });
            fs.writeFileSync(`${reactDest}/${name}.jsx`, result, { encoding : 'UTF-8' });
            resolve();
        }).catch(reject);
    }));
});

Promise.all(promises).then(() => { 
  process.exit(0);
}, function(reason) {
  checkError(reason);
});
