"use strict";


const SvgComponent = require('./SvgComponent.jsx');
const ClockIcon = require('../../src/email.svg');
const React = require('react');
const ReactDOM = require('react-dom');


const render = () => {
    ReactDOM.render(
        <SvgComponent className="icon-spin" size={25} title={"Weeee! Weeeeeeeee!"}><ClockIcon /></SvgComponent>,
        document.getElementById('IconContainer'));
};


module.exports = {
    render : render
};