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
                { className: [this.props.className, 'dibsvg-svg dibsvg-order-count'].join(' '), 'data-tn': 'order-count', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M24.9473684,38.0824123 L24.9473684,61.3406189 L51.2084211,69.9373084 L75.0526316,61.3719013 L75.0526316,37.5893591 L51.987816,45.1564851 C51.8411831,45.2048524 51.6871444,45.229036 51.5345869,45.229036 C51.4072087,45.229036 51.2798306,45.2124098 51.1554148,45.1791573 L24.9473684,38.0824123 Z M25.8526356,35.2000421 L51.4945961,42.1426011 L73.3330779,34.9782182 L51.2172632,30.012084 L25.8526356,35.2000421 Z M50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 Z M50,96 C75.4050985,96 96,75.4050985 96,50 C96,24.5949015 75.4050985,4 50,4 C24.5949015,4 4,24.5949015 4,50 C4,75.4050985 24.5949015,96 50,96 Z M51.2305263,73 C51.0772632,73 50.924,72.9761658 50.7766316,72.9270078 L23.0197895,63.8417178 C22.4126316,63.6421066 22,63.0700863 22,62.4250739 L22,34.1681684 C22,33.4591017 22.4936842,32.8483509 23.1818947,32.7068355 L50.9387368,27.028343 C51.1421053,26.9896125 51.3498947,26.9896125 51.5503158,27.0343016 L76.8461053,32.712794 C77.5195789,32.8647369 78,33.4695291 78,34.1681684 L78,62.4250739 C78,63.0537003 77.608,63.6167828 77.02,63.8283111 L51.7242105,72.9150907 C51.5650526,72.9716969 51.3970526,73 51.2305263,73 Z M50.0925926,64.5063263 L50.0925926,49.5020361 C50.0925926,48.6886836 50.8765926,48.0285714 51.8425926,48.0285714 C52.8085926,48.0285714 53.5925926,48.6886836 53.5925926,49.5020361 L53.5925926,64.5063263 C53.5925926,65.3211523 52.8085926,65.9797909 51.8425926,65.9797909 C50.8765926,65.9797909 50.0925926,65.3211523 50.0925926,64.5063263 Z', id: 'Combined-Shape' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;