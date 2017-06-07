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
                { className: [this.props.className, 'dibsvg-svg dibsvg-checkmark-void'].join(' '), 'data-tn': 'checkmark-void', viewBox: '0 0 250 250' },
                React.createElement('circle', { className: 'dibsvg-checkmark-void-background', fill: '#ffffff', cx: '125.5', cy: '124', r: '112.5' }),
                React.createElement('polygon', { className: 'dibsvg-checkmark-void-check', points: '111.5,199.4 58.5,123.6 78.9,109.2 112.9,157.8 190.3,61.9 209.7,77.5 ' }),
                React.createElement('path', { className: 'dibsvg-checkmark-void-void', d: 'M214,212.7c22.3-22.6,36-53.6,36-87.7C250,56.1,193.9,0,125,0S0,56.1,0,125s56.1,125,125,125c34.1,0,65.1-13.8,87.7-36c0.2-0.2,0.4-0.4,0.7-0.6C213.6,213.2,213.8,212.9,214,212.7z M230,125c0,25.4-9,48.6-24.1,66.8L58.2,44.1C76.4,29,99.6,20,125,20C182.9,20,230,67.1,230,125z M20,125c0-25.4,9-48.6,24.1-66.8L191.9,206c-18.3,15-41.5,24-66.9,24C67.1,230,20,182.9,20,125z' }),
                React.createElement('rect', { x: '58.4', y: '-727.5', fill: 'none', width: '986.1', height: '925' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;