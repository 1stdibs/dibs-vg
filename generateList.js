"use strict";

const fs = require('fs');
const checkError = err => {
    if (err) {
        throw err;
    }
};

/**
 * Builds a JSON list of all the SVGs and writes to file. Important to include in the package in case someone needs a
 * list of all the icons ie. you want to render all of them.
 */
const buildList = () => {
    fs.readdir(`${__dirname}/src`, (err, ls) => {
        checkError(err);
        const svgs = ls.filter(fileName => fileName.match(/\.svg$/));
        fs.writeFile(`${__dirname}/list.json`, JSON.stringify(svgs), { encoding : "UTF-8" }, err => {
            checkError(err);
        });
    });
};

buildList();
