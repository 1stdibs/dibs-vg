"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Wrapper = require('./Wrapper.jsx');  // eslint-disable-line react/require-extension
const BackboneIcons = require('./BackboneIcons.js');

window.onload = function () {
    // React :
    ReactDOM.render(
        React.createElement(Wrapper, {}),
        document.getElementsByClassName('sample-container')[0]
    );
    // Backbone :
    document.getElementsByClassName('sample-container')[0].appendChild(new BackboneIcons().render().el);
};

if (module.hot) {
    module.hot.accept();
}
