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
                { className: [this.props.className, 'dibsvg-svg dibsvg-plus'].join(' '), 'data-tn': 'plus', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M117,118 L7.4990045,118 C3.35670226,118 0,121.357864 0,125.5 C0,129.633707 3.35741867,133 7.4990045,133 L117,133 L117,242.500996 C117,246.643298 120.357864,250 124.5,250 C128.633707,250 132,246.642581 132,242.500996 L132,133 L242.500996,133 C246.643298,133 250,129.642136 250,125.5 C250,121.366293 246.642581,118 242.500996,118 L132,118 L132,7.4990045 C132,3.35670226 128.642136,0 124.5,0 C120.366293,0 117,3.35741867 117,7.4990045 L117,118 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;