"use strict";


require('react');
const SvgComponent = require('./SvgComponent.jsx');
const ClockIcon = require('../../src/email.svg');


const render = () => {
    ReactDOM.render(
        <IconWrapper className="icon-spin" size={25} title={"Weeee! Weeeeeeeee!"}> <ClockIcon /> </IconWrapper>,
        document.getElementById('IconContainer'));
};


module.exports = {
    render : render
};