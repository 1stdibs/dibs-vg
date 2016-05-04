"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const IconContainer = require('./IconContainer.jsx');

window.onload = function () {
    ReactDOM.render(<IconContainer />, document.getElementById('IconContainer'));
};
