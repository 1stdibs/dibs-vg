'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { className: [this.props.className, 'dibsvg-svg dibsvg-gear-filled'].join(' '), 'data-tn': 'gear-filled', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M101.8,4.6c0,0,23.5,49.9,51.5,4.5l1.5-3.1c0,0,2.7-6.5,8.7-4.6L190,14.2c0,0,6.7,2.9,3.1,10.2c0,0-8.1,16.8-2,25.5c0,0,7.7,16.8,26,15.3l9.2-2.1c0,0,10.3-3.6,13.8,4.1l9.2,22.2c0,0,3.3,8.5-4.4,11.3l-11.4,5.3c0,0-15.8,10.2-11.2,27c0,0-0.9,6.9,17.9,19.9l5.6,4.1c0,0,6.1,4.1,1,12.2l-9.7,19.4c0,0-2.1,6.5-10.8,3.7l-15.7-4.1c0,0-4.1-0.3-6.5,0.4c-4.4,1.2-11.2,3.7-13.8,7.7c0,0-10.2,8.2-6.6,21.4l2.1,9.7c0,0,3,9.8-2,12.2l-23.9,8.7c0,0-6.1,2.6-10.7-4.1l-10.7-16.3c0,0-6.1-9.2-20.4-6.6c0,0-11.7,1.5-17.3,12.8l-7.3,10.1c0,0-2.8,5.5-9.9,2.9l-23.7-12.6c0,0-7.4-3.6-1.8-12.5c0,0,12.1-19.5-5.2-33.7c0,0-11.7-7.1-29.6-3c0,0-9.2,4.3-13.3-2.5l-9.7-24.5c0,0-1.7-6.5,3.9-9.5c0.5-0.3,1-0.5,1.7-0.7c7.6-2.6,22.4-7.7,22.4-26.5c0,0,1-13.3-15.3-22.9l-6.6-4.1c0,0-7.1-4.6-3.1-13.8l9.5-19.9c0,0,2.8-7,11.4-3.6l14.3,3.5c0,0,25.5,2.5,28-18.4l-0.4-11.3c0,0-0.8-5.4-1.4-8.4c-1-5-1-12.3,4-13.8L87,1.1C87,1.1,97.7-3,101.8,4.6z M123.8,65c-33.4,0.1-60.4,27.1-60.3,60.5c0.1,33.4,27.1,60.4,60.5,60.3s60.4-27.1,60.3-60.5S157.2,65,123.8,65z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;