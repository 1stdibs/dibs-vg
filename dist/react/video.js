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
                { className: [this.props.className, 'dibsvg-svg dibsvg-video'].join(' '), 'data-tn': 'video', viewBox: '0 0 45 34' },
                React.createElement('path', { d: 'M0,0 L45.003131,0 L45.003131,33.75 L0,33.75 L0,0 Z M0.75,33 L44.253131,33 L44.253131,0.75 L0.75,0.75 L0.75,33 Z M32.375,10.9790132 L32.375,24.0212845 L27.0365789,20.855179 L27.0365789,22.1032548 C27.0365789,23.3557236 26.0438367,24.375 24.8142105,24.375 L15.8473684,24.375 C14.6177422,24.375 13.625,23.3557236 13.625,22.1032548 L13.625,12.8967452 C13.625,11.6442764 14.6177422,10.625 15.8473684,10.625 L24.8151978,10.6250013 C26.0425799,10.6282326 27.0318461,11.6465512 27.0318421,12.8967452 L27.0318421,14.1451187 L32.375,10.9790132 Z M26.2818421,15.461316 L26.2818421,12.896744 C26.2818448,12.0556451 25.6226873,11.3771297 24.8142105,11.375 L15.8473684,11.375 C15.0364478,11.375 14.375,12.0541271 14.375,12.8967452 L14.375,22.1032548 C14.375,22.9458729 15.0364478,23.625 15.8473684,23.625 L24.8142105,23.625 C25.6251311,23.625 26.2865789,22.9458729 26.2865789,22.1032548 L26.2865789,19.5383862 L31.625,22.7044917 L31.625,12.2952105 L26.2818421,15.461316 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;