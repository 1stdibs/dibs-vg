"use strict";

const marked = require('marked');
const fs = require('fs');
const md = fs.readFileSync(`${__dirname}/CONTRIBUTING.md`, 'utf-8');
console.log(marked(md));

