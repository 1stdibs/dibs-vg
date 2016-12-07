"use strict";

/**
 * Builds the raw_modules directory - each file will be a JS module that uses back ticks to export a multi line string.
 */

const fs = require('fs-extra');
const htmlToReact = require('./htmlToReact');
const htmlToReactAttributes = require('./htmlToReactAttributes');
const babel = require('babel-core');
const svgs = fs.readdirSync(process.cwd() + '/src').filter(fileName => fileName.match(/\.svg$/));
const dist = `${process.cwd()}/dist/`;
const stringDest = `${dist}/templateString`;
const reactDest = `${dist}/react`;
// can't require this file since it does not have a `.json` extension
// otherwise `SyntaxError: Unexpected token :` gets thrown
const babelPresets = JSON.parse(require('fs').readFileSync('./.babelrc'), 'utf8');
// a function to end process to prevent prepublish from completing if an error is encountered :
const checkError = err => {
    if (err) {
        throw err;
    }
};

let remaining = svgs.length;

const promises = [];

// start with a fresh dist dir every time
// `removeSync` is a fs-extra method otherwise
// `fs.rmdirSync` will throw a "folder not empty" error
fs.removeSync(dist);
fs.mkdirSync(dist);

[stringDest, reactDest].forEach(val => {
    if (!fs.existsSync(val)) {
        fs.mkdirSync(val);
    }
});

svgs.forEach(file => {
    const leFile = `${process.cwd()}/src/${file}`;
    const name = file.split('.')[0];

    const contents = fs.readFileSync(leFile, {encoding: 'UTF-8'});

    // generate template string module :
    const stringContents = `module.exports = \`${contents}\`;`;

    fs.writeFileSync(`${stringDest}/${name}.js`, babel.transform(stringContents, babelPresets).code, { encoding: 'UTF-8' });

    // generate react module :
    promises.push(new Promise((resolve, reject) => {
        htmlToReact(contents).then(result => {
            console.log(`compiling react component for ${name}. ${remaining} files left`);
            remaining--;

            const babelResult = babel.transform(result, Object.assign({plugins: [htmlToReactAttributes]}, babelPresets));
            fs.writeFileSync(`${reactDest}/${name}.js`, babelResult.code, { encoding: 'UTF-8' });
            resolve();
        }).catch((err) => {
            reject(err);
        });
    }));
});

Promise.all(promises)
    .then(
        () => process.exit(0),
        reason => checkError(reason)
    );
