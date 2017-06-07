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
                { className: [this.props.className, 'dibsvg-svg dibsvg-trash-outlined'].join(' '), 'data-tn': 'trash-outlined', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M240,31h-60.3l-3.9-16.2l0-0.2c-0.1-0.4-1.2-3.9-4.2-7.4c-2.9-3.3-8.1-7.2-16.7-7.2H92.1c-0.4,0-3.6,0.1-7.4,1.9c-3.5,1.7-8.1,5.3-10.3,12.6L71.7,31H10v9h18.8l15.7,185.5c0,1.8,0.3,9.8,6.4,16.3c5.2,5.4,12.8,8.2,22.8,8.2h111.5l0.2,0c7.9-0.9,23-7.3,23.6-25.5L223.3,40H240V31z M83.1,16.9C85.4,9.6,91.4,9,92.2,9h62.5c9.4,0,12,7,12.3,8l3.4,14H80.8L83.1,16.9z M200,223.8l0,0.2c-0.4,14.2-13.1,16.6-15.4,16.9h-111c-7.3,0-12.8-1.8-16.2-5.3c-4.2-4.3-4-10.1-4-10.1l0-0.3L37.8,40h176.4L200,223.8z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;