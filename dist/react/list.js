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
                { className: [this.props.className, 'dibsvg-svg dibsvg-list'].join(' '), 'data-tn': 'list', viewBox: '0 0 420 420' },
                React.createElement('ellipse', { cx: '36.1', cy: '42.2', rx: '35.6', ry: '36.2' }),
                React.createElement('ellipse', { cx: '36.1', cy: '210.3', rx: '35.6', ry: '36.2' }),
                React.createElement('ellipse', { cx: '36.1', cy: '377.3', rx: '35.6', ry: '36.2' }),
                React.createElement('rect', { x: '140.8', y: '0.4', width: '278.7', height: '85.4' }),
                React.createElement('rect', { x: '140.8', y: '167.2', width: '278.7', height: '85.4' }),
                React.createElement('rect', { x: '140.8', y: '334', width: '278.7', height: '85.4' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;