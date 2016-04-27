"use strict";

const fs = require('fs');

const build = () => {
    const ls = fs.readdirSync(__dirname + '/src');
    fs.writeFileSync(__dirname + '/list.json', JSON.stringify(ls), { encoding : "UTF-8" });
};

build();
