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
                { className: [this.props.className, 'dibsvg-svg dibsvg-arrow-clockwise'].join(' '), 'data-tn': 'arrow-clockwise', viewBox: '0 0 260 250' },
                React.createElement('path', { d: 'M121.3,0C54.4,0,0,56.1,0,125c0,68.9,54.3,124.9,121.2,125c3.2,0,6.2-1.7,7.8-4.5c1.6-2.8,1.6-6.4,0-9.2c-1.6-2.8-4.6-4.6-7.8-4.5C63.9,231.7,17.7,184,17.7,125C17.7,66,64,18.3,121.3,18.3c43.7,0,81,27.8,96.3,67.1l-18.2-11c-2.7-1.8-6.3-2-9.1-0.3c-2.9,1.6-4.6,4.8-4.6,8.2c0.1,3.4,1.9,6.5,4.8,8l35.4,21.3c2.1,1.2,4.6,1.6,6.9,0.9c2.3-0.7,4.3-2.3,5.4-4.5l20.7-39.6c1.6-2.9,1.5-6.4-0.1-9.2c-1.6-2.8-4.6-4.5-7.8-4.4c-3.3,0-6.3,2-7.8,5l-9.5,18.2C215.6,32.1,172,0,121.3,0z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;