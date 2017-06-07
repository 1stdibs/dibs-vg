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
                { className: [this.props.className, 'dibsvg-svg dibsvg-inquiries'].join(' '), 'data-tn': 'inquiries', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M69.6901079,33.0773333 C70.2151108,32.9670753 70.7822203,33.1428101 71.1503884,33.5830481 C71.3864651,33.8653374 71.5010335,34.2088961 71.499759,34.5501728 C71.4999195,34.559207 71.5,34.5682608 71.5,34.5773333 L71.5,65.4546667 C71.5,66.2830938 70.8284271,66.9546667 70,66.9546667 L30,66.9546667 C29.1715729,66.9546667 28.5,66.2830938 28.5,65.4546667 L28.5,34.5773333 C28.5,33.7489062 29.1715729,33.0773333 30,33.0773333 L69.6901079,33.0773333 Z M31.5,37.9335953 L31.5,63.9546667 L68.5,63.9546667 L68.5,37.7549583 L51.2926852,52.1453218 C50.7463466,52.6022211 49.9540446,52.6119482 49.3966536,52.1685993 L31.5,37.9335953 Z M33.9855504,36.0773333 L50.3066375,49.0591312 L65.8296563,36.0773333 L33.9855504,36.0773333 Z M50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 Z M50,96 C75.4050985,96 96,75.4050985 96,50 C96,24.5949015 75.4050985,4 50,4 C24.5949015,4 4,24.5949015 4,50 C4,75.4050985 24.5949015,96 50,96 Z', id: 'Combined-Shape' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;