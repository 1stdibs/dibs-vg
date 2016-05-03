"use strict";


const React = require('react');
const ReactDOM = require('react-dom');
const IconContainer = require('./IconContainer.jsx');

const render = () => {
    ReactDOM.render(<IconContainer />, document.getElementById('IconContainer'));
};

module.exports = {
    render : render
};