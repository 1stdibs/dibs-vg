"use strict";

/**
 * Builds the raw_modules directory - each file will be a JS module that uses back ticks to export a multi line string.
 */

const fs = require('fs');
const path = require('path');
const htmlToReact = require('./htmlToReact');
const htmlToReactAttributes = require('./htmlToReactAttributes');
const babel = require('babel-core');
const rootPath = path.resolve(__dirname, '../');
const svgs = fs.readdirSync(`${rootPath}/src`).filter(fileName => fileName.match(/\.svg$/));
const dist = `${rootPath}/dist/`;
const stringDest = `${dist}/templateString`;
const reactDest = `${dist}/react`;
let remaining = svgs.length;

// make the dist directory and child directories if none exist :
if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
}
[stringDest, reactDest].forEach(val => {
    if (!fs.existsSync(val)) {
        fs.mkdirSync(val);
    }
});

const promises = svgs.map(file => {
    const leFile = `${rootPath}/src/${file}`;
    const name = file.split('.')[0];

    const contents = fs.readFileSync(leFile, {encoding: 'UTF-8'});

    // generate template string module :
    const stringContents = `module.exports = \`${contents}\`;`;

    fs.writeFileSync(`${stringDest}/${name}.es.js`, stringContents, { encoding: 'UTF-8' });
    fs.writeFileSync(`${stringDest}/${name}.js`, babel.transform(stringContents, { presets: ["es2015", "stage-2", "react"] }).code, { encoding: 'UTF-8' });

    // generate react module :
    return new Promise((resolve, reject) => {
        htmlToReact(name, contents)
            .then(result => {
                console.log(`compiling react component for ${name}. ${remaining} files left`);
                remaining--;

                const babelResult = babel.transform(result, {
                    presets: ["es2015", "stage-2", "react"],
                    plugins: [htmlToReactAttributes]
                });
                fs.writeFileSync(`${reactDest}/${name}.js`, babelResult.code, { encoding: 'UTF-8' });
                fs.writeFileSync(`${reactDest}/${name}.jsx`, result, { encoding: 'UTF-8' });
                resolve();
            })
            .catch((err) => reject([err, file]));
    });
});

Promise.all(promises)
    .then(() => {
        console.log("Successfully compiled all SVG files.");
    })
    .catch(([err, file]) => {
        console.log(`Failed to compile SVG file ${file}`);
        console.error(err);
        process.exit(1);
    });
