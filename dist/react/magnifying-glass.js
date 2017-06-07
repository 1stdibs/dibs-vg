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
                { className: [this.props.className, 'dibsvg-svg dibsvg-magnifying-glass'].join(' '), 'data-tn': 'magnifying-glass', viewBox: '0 0 518 518' },
                React.createElement('path', { d: 'M494.2,470.1l-158-160.6c25.1-32.4,40.1-73.2,40.1-117.7C376.4,86.4,292.3,1,188.7,1C85,1,0.9,86.4,0.9,191.8s84,190.8,187.7,190.8c47.9,0,91.5-18.4,124.7-48.4L470.6,494c6.5,6.6,17.1,6.6,23.6,0C500.7,487.4,500.7,476.7,494.2,470.1z M188.8,348.8c-88.7,0-156.4-68.4-156.4-158c0-89.6,67.7-158,156.4-158s156.4,68.5,156.4,158S277.5,348.8,188.8,348.8z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;