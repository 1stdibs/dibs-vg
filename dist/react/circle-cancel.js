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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-cancel'].join(' '), 'data-tn': 'circle-cancel', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.2-0.2C56.2-0.2,0,56,0,125s56.2,125.2,125.2,125.2c69.1,0,125.2-56.1,125.2-125.1S194.2-0.2,125.2-0.2z M125.3,241.1C61.2,241.1,9.1,189,9.1,125S61.2,8.8,125.2,8.8c64.1,0,116.3,52,116.3,116.1S189.4,241.1,125.3,241.1z' }),
                React.createElement('polygon', { points: '162.9,100.5 150.2,87.8 124.8,113.3 98.2,86.8 85.5,99.5 112,126 85,153 97.7,165.7 124.8,138.7150.7,164.7 163.4,152 137.5,126' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;