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
                { className: [this.props.className, 'dibsvg-svg dibsvg-heart-filled'].join(' '), 'data-tn': 'heart-filled', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M29.3,129.8c-6.5-8.5-27.7-37.7-28.9-57.4C-0.8,52.3,4.1,36.2,15,24.6C30.1,8.5,51.4,6.8,59.9,6.8c1.3,0,2.2,0,2.8,0.1 c16.2,0.4,39.5,7.6,58.9,39.4l3.4,5.6l3.6-5.5c16.8-25.7,37.1-39,60.3-39.5c3,0,28.9-0.9,48,20.6c7.2,8.1,15.1,22.5,12.5,45.6 c-1.9,16.9-16.2,39.3-24.3,50.4c-11.8,16.1-88.5,108.3-100.2,122L29.3,129.8z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;