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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-check'].join(' '), 'data-tn': 'circle-check', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.3-0.8C56.3-0.8,0.2,55.3,0.2,124.3s56.2,125.2,125.2,125.2s125.2-56.2,125.2-125.2S194.4-0.8,125.3-0.8z M125.3,240.5c-64.1,0-116.2-52.1-116.2-116.2S61.3,8.2,125.3,8.2s116.2,52.1,116.2,116.2S189.4,240.5,125.3,240.5z' }),
                React.createElement('polygon', { points: '106.2,145.1 74.6,113.8 62,126.6 105.8,169.9 195.1,88.1 182.9,74.9' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;