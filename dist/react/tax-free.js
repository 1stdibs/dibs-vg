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
                { className: [this.props.className, 'dibsvg-svg dibsvg-tax-free'].join(' '), 'data-tn': 'tax-free', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.1,0.2C56.3,0.2,0.4,56.2,0.4,124.9s55.9,124.7,124.7,124.7c68.7,0,124.7-55.9,124.7-124.7S193.8,0.2,125.1,0.2zM125.1,10.2c32.2,0,61.3,13.3,82.1,34.7l-78.9,66.2L122.1,95h-9.7L96,138.3L32.1,192c-13.7-18.9-21.7-42-21.7-67.1C10.4,61.7,61.8,10.2,125.1,10.2z M127.3,133h-9.4l7.2-6L127.3,133z M109.6,126.9l7.8-20.7l4,10.8L109.6,126.9z M125.1,239.6c-34.6,0-65.7-15.4-86.7-39.8L92.9,154h7l3.1-8.5l5.4-4.5H130l4.8,13h9.8l-12.5-32.9l29.3-24.6l19.4,27.3L159.1,154h10.6l16.7-23.5L203,154h10.5l-21.6-30.3L212.3,95h-10.6l-15.4,22l-15.5-22h-7.8l50.7-42.6c16.2,19.8,25.9,45,25.9,72.5C239.7,188.1,188.3,239.6,125.1,239.6z' }),
                React.createElement('polygon', { points: '53,104 53,154 61,154 61,104 78,104 78,95 35,95 35,104 \t' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;