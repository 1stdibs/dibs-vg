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
                { className: [this.props.className, 'dibsvg-svg dibsvg-repost'].join(' '), 'data-tn': 'repost', viewBox: '0 0 250 250' },
                React.createElement('path', { className: 'st0', d: 'M130.9,232c-30.6-0.4-61-15.9-90.5-46.3l20.8-20.6c26.6,27.4,52.9,39.9,78.2,37.1c41.3-4.6,68.8-48.5,69.1-49l24.8,15.4c-1.4,2.3-34.9,56.5-90.5,62.8C138.9,231.8,134.9,232,130.9,232z' }),
                React.createElement('path', { className: 'st0', d: 'M44.1,79.9L19.1,64.7c1.4-2.4,35.3-57.9,91.1-64.2c34.5-3.9,68.6,11.6,101.5,46.1l-21,20.4c-26.3-27.6-52.3-40.1-77.3-37.3c-21.4,2.4-39.1,15.8-50.1,26.6C51.2,68.3,44.1,79.8,44.1,79.9z' }),
                React.createElement('polygon', { className: 'st0', points: '104,142.2 1.6,79.8 5,210.2 ' }),
                React.createElement('polygon', { className: 'st0', points: '148.1,90.8 250,153.8 247.1,21.3 ' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;