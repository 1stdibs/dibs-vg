"use strict";

require('babel-register');
const reactSample = require('./reactSample.jsx');

window.onload = function () {
    reactSample.render();
};
