"use strict";


require('react');
const SvgComponent = require('./SvgComponent.jsx');
const ClockIcon = require('babel!svg-react!../src/clock.svg');


const render = () => {
    ReactDOM.render(
        <IconWrapper className="icon-spin" size={25} title={"Weeee! Weeeeeeeee!"}> <ClockIcon /> </IconWrapper>
        , document.getElementById('IconContainer')
    );
};


module.exports = {
    render : render
};