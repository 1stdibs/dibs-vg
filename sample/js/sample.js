"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Wrapper = require('./Wrapper.jsx');  // eslint-disable-line react/require-extension

window.onload = function () {
    ReactDOM.render(
        React.createElement(Wrapper, {}),
        document.getElementsByClassName('sample-container')[0]
    );
};

if (module.hot) {
    module.hot.accept();
}
