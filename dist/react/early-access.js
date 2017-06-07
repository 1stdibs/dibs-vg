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
                { className: [this.props.className, 'dibsvg-svg dibsvg-early-access'].join(' '), 'data-tn': 'early-access', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M56,238.7c-30.6,0-55.5-24.9-55.5-55.5s24.9-55.5,55.5-55.5c12.5,0,24.3,4.1,34.1,11.8l0.7,0.6L221,9.1l7.6,7.6l-16.4,16.5L250,71.6l-7.7,7.5l-37.7-38.4l-19.3,19.5L223,98.7l-7.7,7.5l-37.6-38.3l-79.2,79.6l0.6,0.7c8,9.9,12.4,22.3,12.4,34.9C111.5,213.8,86.6,238.7,56,238.7z M56,138.4c-24.7,0-44.7,20.1-44.7,44.7s20.1,44.7,44.7,44.7s44.7-20.1,44.7-44.7S80.6,138.4,56,138.4z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;