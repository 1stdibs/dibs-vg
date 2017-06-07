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
                { className: [this.props.className, 'dibsvg-svg dibsvg-loader'].join(' '), 'data-tn': 'loader', viewBox: '0 0 1000 1000' },
                React.createElement('path', { d: 'M867.5,10v165.9C777.7,74.1,646.4,10,500,10C229.4,10,10,229.4,10,500s219.4,490,490,490s490-219.4,490-490H867.5c0,98.2-38.3,190.4-107.6,259.9S598.2,867.5,500,867.5c-98.2,0-190.4-38.3-259.9-107.6C170.8,690.4,132.5,598.2,132.5,500c0-98.2,38.3-190.4,107.6-259.9c69.5-69.3,161.7-107.6,259.9-107.6c98.2,0,190.4,38.3,259.9,107.6c4.8,4.8,9.6,9.8,14,14.9H622.5v122.5H990V10H867.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;