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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-percent'].join(' '), 'data-tn': 'circle-percent', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125-0.5C55.9-0.5-0.4,55.8-0.4,124.9c0,69.1,56.2,125.4,125.4,125.4c69.1,0,125.4-56.2,125.4-125.3C250.4,55.8,194.1-0.5,125-0.5z M125,241.3c-64.2,0-116.4-52.2-116.4-116.4C8.6,60.7,60.8,8.5,125,8.5c64.2,0,116.4,52.2,116.4,116.5C241.4,189.1,189.2,241.3,125,241.3z' }),
                React.createElement('path', { d: 'M156.9,127.3c-17.7,0-29.4,13-29.4,29.8c0,16.6,11.8,29.3,29.4,29.3c17.7,0,29.6-12.7,29.6-29.3C186.5,140.3,174.6,127.3,156.9,127.3z M156.9,174.6c-9.3,0-15.7-7.1-15.7-17.5c0-10.7,6.4-17.8,15.7-17.8c9.3,0,15.9,7.1,15.9,17.8C172.8,167.5,166.2,174.6,156.9,174.6z' }),
                React.createElement('path', { d: 'M122.7,93.2c0-16.8-12-29.8-29.8-29.8c-17.7,0-29.4,13-29.4,29.8c0,16.6,11.8,29.3,29.4,29.3C110.7,122.5,122.7,109.8,122.7,93.2z M77.2,93.2c0-10.7,6.6-17.8,15.7-17.8c9.3,0,15.9,7.1,15.9,17.8c0,10.2-6.6,17.5-15.9,17.5C83.8,110.7,77.2,103.4,77.2,93.2z' }),
                React.createElement('polygon', { points: '157.5,65.2 81.5,184.2 93.2,184.2 169.4,65.2' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;