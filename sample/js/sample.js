"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactIcons = require('./ReactIcons.jsx');
const BackboneIcons = require('./BackboneIcons.js');
require('../../scss/sample.scss');

window.onload = function () {
    // React :
    ReactDOM.render(<ReactIcons />, document.getElementsByClassName('sample-container')[0]);

    // Backbone :
    document.getElementsByClassName('sample-container')[0].appendChild(new BackboneIcons().render().el);
};
