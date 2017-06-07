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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-plus'].join(' '), 'data-tn': 'circle-plus', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.2-1.2C56.2-1.2,0,55,0,124s56.2,125.2,125.2,125.2c69.1,0,125.2-56.1,125.2-125.1S194.2-1.2,125.2-1.2z M125.3,240.1C61.2,240.1,9.1,188,9.1,124S61.2,7.8,125.2,7.8c64.1,0,116.3,52,116.3,116.1S189.4,240.1,125.3,240.1z' }),
                React.createElement('polygon', { points: '133.1,79.4 115.1,79.4 115.1,115.4 77.6,115.4 77.6,133.4 115.1,133.4 115.1,171.6 133.1,171.6 133.1,133.4169.8,133.4 169.8,115.4 133.1,115.4' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;