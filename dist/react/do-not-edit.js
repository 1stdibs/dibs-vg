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
                { className: [this.props.className, 'dibsvg-svg dibsvg-do-not-edit'].join(' '), 'data-tn': 'do-not-edit', viewBox: '0 0 250 250' },
                React.createElement('rect', { x: '67.9', y: '97.3', transform: 'matrix(0.7071 -0.7071 0.7071 0.7071 -44.1474 128.0603)', className: 'do-not-edit-pencil', width: '129.1', height: '40.1' }),
                React.createElement('polygon', { className: 'do-not-edit-pencil', points: '79.8,170.1 92.6,182.9 75.1,187.6 57.5,192.3 62.2,174.8 66.9,157.2' }),
                React.createElement('path', { className: 'do-not-edit-circle', d: 'M124.9,249.8C56,249.8,0,193.8,0,124.9S56,0,124.9,0s124.9,56,124.9,124.9S193.8,249.8,124.9,249.8z M42.7,52c-17.3,19.4-27.8,45-27.8,73c0,60.6,49.3,109.9,109.9,109.9c28,0,53.5-10.5,73-27.8L42.7,52z M53.4,41.5l155,155c16.5-19.2,26.5-44.2,26.5-71.5C234.9,64.3,185.5,15,124.9,15C97.6,15,72.6,25,53.4,41.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;