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
                { className: [this.props.className, 'dibsvg-svg dibsvg-hamburger-menu'].join(' '), 'data-tn': 'hamburger-menu', viewBox: '-220.7 -160.7 500 500' },
                React.createElement('path', { d: 'M260.8,107.7h-463c-10.2,0-18.5-8.2-18.5-18.4s8.3-18.4,18.5-18.4h463 c10.2,0,18.5,8.2,18.5,18.4S271,107.7,260.8,107.7z M260.8-30h-463c-10.2,0-18.5-8.2-18.5-18.4s8.3-18.4,18.5-18.4h463 c10.2,0,18.5,8.2,18.5,18.4S271-30,260.8-30z M-202.2,208.6h463c10.2,0,18.5,8.2,18.5,18.4c0,10.1-8.3,18.4-18.5,18.4h-463 c-10.2,0-18.5-8.2-18.5-18.4C-220.7,216.8-212.4,208.6-202.2,208.6z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;