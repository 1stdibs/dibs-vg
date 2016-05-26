"use strict";

/**
 * Builds the raw_modules directory - each file will be a JS module that uses back ticks to export a multi line string.
 */

const fs = require('fs');
const htmlToReact = require('./htmlToReact');
const svgs = fs.readdirSync(process.cwd() + '/src');
const stringDest = `${process.cwd()}/dist/templateString`;
const reactDest = `${process.cwd()}/dist/react`;
// a function to end process to prevent prepublish from completing if an error is encountered :
const checkError = err => {
    if (err) {
        throw err;
        process.exit(1);
    }
};

svgs.forEach(file => {
    const leFile = `${process.cwd()}/src/${file}`;
    const name = file.split('.')[0];

    fs.readFile(leFile, (err, data) => {
        checkError(err);

        // generate template string module :
        const fileContents = data.toString();
        const stringContents = `module.exports = \`${fileContents};\`\n`;

        fs.writeFile(`${stringDest}/${name}.es.js`, stringContents, { encoding : 'UTF-8' }, err => {
            checkError(err);
        });

        // generate react module :
        htmlToReact(fileContents).then(result => {

            fs.writeFile(`${reactDest}/${name}.jsx`, result, { encoding : 'UTF-8' }, err => {
                checkError(err);
            });

        }).catch(checkError);
    });
});

