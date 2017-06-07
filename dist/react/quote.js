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
                { className: [this.props.className, 'dibsvg-svg dibsvg-quote'].join(' '), 'data-tn': 'quote', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M193.2,142h-25.1c3.3-47,40.9-82.6,81.9-106.9l-7.5-12.5c-65.2,32.6-100.3,88.6-100.3,131.2c0,46.8,14.2,75.2,59.3,75.2 c20,0,40.1-21,40.1-42.7C241.6,163.8,227.4,142,193.2,142z' }),
                React.createElement('path', { d: 'M108,35.1l-7.5-12.5C35.3,55.2,0.2,111.2,0.2,153.8c0,46.8,14.2,75.2,59.3,75.2c20.1,0,40.1-21,40.1-42.7 c0-22.6-14.2-44.4-48.5-44.4H26.1C29.4,95,67,59.4,108,35.1z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;