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
                { className: [this.props.className, 'dibsvg-svg dibsvg-gallery'].join(' '), 'data-tn': 'gallery', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M83,41v20H48v28H0v146h201v-37h27v-33h22V41H83z M193,97v103.3L127.5,140l-47.8,45.8l-14.2-13.6L8,221.8V97H193z M15.6,227 l49.6-42.8L79.7,198l48-45.9l65.3,60.1V227H15.6z M221,191h-20V89H55V68h166V191z M244,159h-16V61H89V47h155V159z' }),
                React.createElement('path', { d: 'M43.3,157.5c13,0,23.6-10.3,23.6-23c0-12.7-10.6-23-23.6-23c-13,0-23.6,10.3-23.6,23C19.7,147.2,30.3,157.5,43.3,157.5z M43.3,120.3c8.1,0,14.7,6.3,14.7,14.1c0,7.8-6.6,14.1-14.7,14.1s-14.7-6.3-14.7-14.1C28.5,126.7,35.1,120.3,43.3,120.3z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;