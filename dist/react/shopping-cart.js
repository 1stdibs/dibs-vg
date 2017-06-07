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
                { className: [this.props.className, 'dibsvg-svg dibsvg-shopping-cart'].join(' '), 'data-tn': 'shopping-cart', viewBox: '-220.7 -160.7 500 500' },
                React.createElement('path', { d: 'M263.2-67.5H-71.5c-8.9,0-16.1,7.6-16.1,16.9c0,0.1-17.9-92.8-17.9-92.8c-2.1-10.6-8.4-17.4-21.9-17.4h-77.1 c-8.9,0-16.1,7.6-16.1,16.9c0,9.4,7.2,16.9,16.1,16.9h70.4l58.8,307.5c2.3,10.6,11.4,14.6,19.5,14.6c0,0,248.3,0,248.8,0 c8.4,0,17-3.7,19.2-12.8l63.8-219c1.1-3.3,3.3-8.2,3.3-14C279.3-59.9,272.1-67.5,263.2-67.5z M185.4,161.4c-0.1,0-0.2,0-0.3,0 H-47.3L-86.8-45.4c2.1,6.8,8.1,11.8,15.3,11.8h314.1L185.4,161.4z' }),
                React.createElement('path', { d: 'M-22.9,254.6c-23,0-41.6,19-41.6,42.4c0,23.4,18.6,42.4,41.6,42.4s41.6-19,41.6-42.4S0.1,254.6-22.9,254.6z M-22.6,312.5c-8.7,0-15.7-7-15.7-15.5c0-8.6,7-15.5,15.7-15.5s15.7,7,15.7,15.5C-6.9,305.5-13.9,312.5-22.6,312.5z' }),
                React.createElement('path', { d: 'M167.7,254.6c-22.7,0-41,19-41,42.4c0,23.4,18.4,42.4,41,42.4s41-19,41-42.4S190.4,254.6,167.7,254.6z M167.8,312.5c-8.6,0-15.5-7-15.5-15.5c0-8.6,7-15.5,15.5-15.5c8.6,0,15.5,7,15.5,15.5C183.3,305.5,176.4,312.5,167.8,312.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;