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
                { className: [this.props.className, 'dibsvg-svg dibsvg-pinterest'].join(' '), 'data-tn': 'pinterest', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M130.7,2C63.6,2,29.9,50,29.9,90c0,24.3,9.2,45.8,28.9,53.7c3.3,1.3,6.2,0,7.1-3.5c0.8-2.5,2.1-8.9,2.9-11.4c1-3.5,0.8-4.8-2.1-7.7c-5.6-6.7-9.4-15.4-9.4-27.7c0-35.6,26.6-67.6,69.5-67.6c37.9,0,58.7,23.1,58.7,53.9c0,40.8-17.9,74.9-44.9,74.9c-14.6,0-25.8-12.1-22.1-27c4.2-17.9,12.5-37,12.5-50.1c0-11.7-6.2-21.2-19.1-21.2c-15,0-27.2,15.8-27.2,36.6c0,13.3,4.6,22.3,4.6,22.3s-15.6,65.5-18.1,76.8c-5.2,22.7-0.8,50.7-0.6,53.5c0.2,1.7,2.3,2.1,3.3,0.8c1.3-1.9,19.5-24.1,25.6-46.2c1.7-6.2,9.8-38.9,9.8-38.9c4.8,9.4,19.3,17.5,34.5,17.5c45.3,0,76.1-41.2,76.1-96.7C220,40.7,184.6,2,130.7,2z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;