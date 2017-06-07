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
                { className: [this.props.className, 'dibsvg-svg dibsvg-eye'].join(' '), 'data-tn': 'eye', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M248.1,131.2c-40.4-53.9-83.3-80.4-127.4-78.8c-29,1.1-58.7,14.8-85.9,39.7c-15.4,14.1-25.8,27.8-30.2,34l-2.2,1.5l0.6,0.9c-0.4,0.6-0.7,1-0.7,1.1l-1.8,2.9l2.3,2.5c38.2,43.1,79.2,64.9,121.9,64.9c0.9,0,1.9,0,2.8,0c36.7-0.8,67.5-17.9,87-32.2c21-15.3,33.2-30.3,33.7-30.9l2.2-2.7L248.1,131.2z M127.1,190.9c-40.1,0.9-78.9-19-115.4-59.2C21,118.5,63.4,63.5,121,61.4c40.3-1.5,79.8,22.9,117.7,72.3C228.5,145.1,184.8,189.6,127.1,190.9z' }),
                React.createElement('circle', { cx: '124.3', cy: '126.5', r: '42.5' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;