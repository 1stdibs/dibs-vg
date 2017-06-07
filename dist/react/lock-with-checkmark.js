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
                { className: [this.props.className, 'dibsvg-svg dibsvg-lock-with-checkmark'].join(' '), 'data-tn': 'lock-with-checkmark', viewBox: '0 0 518 518' },
                React.createElement('path', { d: 'M423.3,241v-70.8l0-0.4c-0.1-1.9-2.5-47.3-15.4-71.1c-7.9-14.6-20.8-36.1-41.3-54.7C344.7,24.3,317.6,11,286,4.7c-5.3-1.1-17.8-2.2-30.6-2.2c-10.4,0-19.2,0.7-26.3,2.1c-30.7,6.2-87,26.1-119,90.5c-16.6,33.5-16,81.1-16,81.6c0.3,14.7,0.1,21.4,0,31.6c-0.1,7.6-0.3,16.9-0.3,32.7H43.5v274.3l427.5,0.2V241H423.3z M108.2,176.5c-0.2-12.3,2-49.9,14.5-75.1c29.3-59,81-77.3,109.2-83c6.1-1.2,14.2-1.9,23.5-1.9c12.5,0,24,1.1,27.8,1.9c64.8,13,94.1,53.4,112.3,87c11,20.4,13.6,62,13.8,65v71.2h-60.9L348,171l0-0.6c-4.8-48.2-27.3-71.3-45.4-82.1c-19.2-11.5-37.3-12-39.1-12c-48.9-1.3-72.4,25.5-83.5,47.9c-11.5,23.1-12.1,46-12.1,47l0,70.5h-60.1c0-16,0.2-25.3,0.3-33C108.4,198.7,108.5,191.5,108.2,176.5z M181.9,241v-69.7c0-1.2,0.9-21.6,10.8-41.4c13.2-26.4,35.9-39.7,67.4-39.7c1,0,2,0,3,0l0.2,0c0.2,0,15.5,0.1,32,10c22.3,13.3,35.3,37.3,38.7,71.2l0.4,69.6H181.9z M57.5,501.3V255.6h399.5l-0.3,245.6L57.5,501.3z' }),
                React.createElement('polygon', { points: '229.5,404.3 196.4,368.5 174.3,388.8 229,448 338.8,334.5 317.2,313.6' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;