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
                { className: [this.props.className, 'dibsvg-svg dibsvg-exclamation-circle'].join(' '), 'data-tn': 'exclamation-circle', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.2-0.2C56.2-0.2,0,56,0,125s56.2,125.2,125.2,125.2c69.1,0,125.2-56.1,125.2-125.1S194.2-0.2,125.2-0.2z M125.3,241.1C61.2,241.1,9.1,189,9.1,125S61.2,8.8,125.2,8.8c64.1,0,116.3,52,116.3,116.1S189.4,241.1,125.3,241.1z' }),
                React.createElement('path', { d: 'M125.1,171c-8.6,0-15.6,7.1-15.6,15.8c0,8.7,6.9,15.6,15.6,15.6c8.7,0,15.8-7,15.8-15.6C140.9,178.1,133.8,171,125.1,171z' }),
                React.createElement('path', { d: 'M119.3,156.9l0.2,3l11.1,0.2l0.2-3c1.3-21.5,4.4-47.7,6.6-66c1.5-12.1,2.5-20.1,2.5-23.1c0-9.2-6.4-16.3-14.6-16.3c-8.2,0-14.6,7.4-14.6,16.6c0,2.8,0.9,10.2,2.2,20.9C115.1,106.9,118.4,134.5,119.3,156.9z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;