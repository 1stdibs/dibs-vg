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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-arrow-left'].join(' '), 'data-tn': 'circle-arrow-left', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M0,125 C0,56.0810811 56.0810811,0 125,0 C193.918919,0 250,56.0810811 250,125 C250,193.918919 193.918919,250 125,250 C56.0810811,250 0,193.918919 0,125 L0,125 Z M9.99034749,125 C9.99034749,188.416988 61.5830116,240.009653 125,240.009653 C188.416988,240.009653 240.009653,188.416988 240.009653,125 C240.009653,61.5830116 188.416988,9.99034749 125,9.99034749 C61.5830116,9.99034749 9.99034749,61.5830116 9.99034749,125 L9.99034749,125 Z' }),
                React.createElement('path', { d: 'M134.266409,179.440154 L144.88417,168.870656 L103.861004,127.702703 L145.849421,91.9401544 L136.148649,80.5501931 L81.8050193,126.833977 L134.266409,179.440154 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;