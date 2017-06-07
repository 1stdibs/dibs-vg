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
                { className: [this.props.className, 'dibsvg-svg dibsvg-toolbox'].join(' '), 'data-tn': 'toolbox', viewBox: '0 0 518 518' },
                React.createElement('path', { d: 'M257.8,206.3c-17.4,0-31.5,14.1-31.5,31.5c0,17.4,14.1,31.5,31.5,31.5c17.4,0,31.5-14.1,31.5-31.5C289.3,220.5,275.2,206.3,257.8,206.3z M257.8,255.3c-9.6,0-17.5-7.9-17.5-17.5s7.9-17.5,17.5-17.5s17.5,7.9,17.5,17.5S267.5,255.3,257.8,255.3z' }),
                React.createElement('path', { d: 'M378,136.7V84.4l-26.7-33.8h-183l-29,34.2v51.8H1V199v1.7V407h517V200.7V199v-62.3H378z M165.3,94.4l15-17.8h158.3L352,93.5v43.2H165.3V94.4z M504,391.7H15V213h133v62.5l31.2,29.5h156.9l33.4-28.8l0.5-63.2H504V391.7z M356.1,199l-0.5,70.8L330.9,291H184.8L162,269.5V199H15v-48.3h489V199H356.1z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;