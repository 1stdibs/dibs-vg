"use strict";

const fs = require('fs');

/**
 * Builds a JSON list of all the SVGs and writes to file. Important to include in the package in case someone needs a
 * list of all the icons ie. you want to render all of them.
 */
const buildList = () => {
    const ls = fs.readdirSync(__dirname + '/src');
    fs.writeFileSync(__dirname + '/list.json', JSON.stringify(ls), { encoding : "UTF-8" });
};

buildList();
