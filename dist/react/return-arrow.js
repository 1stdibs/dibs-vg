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
                { className: [this.props.className, 'dibsvg-svg dibsvg-return-arrow'].join(' '), 'data-tn': 'return-arrow', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M230.7,21C218.3,7.3,194.3,7.3,188.8,7H69v10h120l0.4,0c0.2,0,21.6-0.3,33.5,10.5c6.8,6.2,10.2,15.4,10.2,27V158l0,0.1c0,0.1,0.1,7.6-5.1,15.3c-7.2,10.7-21.2,16.8-40.5,17.5H20.1l32.9-41.4l-7.8-6.2L4.1,195l40.6,51.8l7.9-6.2l-31-39.6h166l0.1,0c15.8-0.6,37.1-4.9,48.5-22c6.7-10,6.8-19.9,6.8-21.1V54.5C242.3,37.7,238,29.2,230.7,21z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;