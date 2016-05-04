"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const IconContainer = require('./IconContainer.jsx');
require('../../scss/sample.scss');

window.onload = function () {
    ReactDOM.render(<IconContainer />, document.getElementsByClassName('sample-container')[0]);
};
