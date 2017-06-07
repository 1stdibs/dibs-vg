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
                { className: [this.props.className, 'dibsvg-svg dibsvg-folder'].join(' '), 'data-tn': 'folder', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M229.2,63.9c-8.1-4-16-4-16.4-4h-77.4c-9.9,0-18.9-6.5-19.1-6.6L82.4,29.6c-1.4-1-8.1-5.8-10.7-7.1c-8.1-4-14.9-4-15.2-4H38.2c-10.5,0-18.8,3.2-24.8,9.5c-10,10.4-9.8,25.4-9.7,27.1L3.4,200.5c0,23.4,19.9,31.6,30.5,32.6h182.7h0.2c23.3-1.6,29.5-22.4,29.4-33.3v-107C246.2,75.8,237,67.7,229.2,63.9z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;