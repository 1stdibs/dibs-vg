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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-plus-filled'].join(' '), 'data-tn': 'circle-plus-filled', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M250,124.940715 C250,193.916268 193.961988,250 124.994613,250 C56.0487868,250 0,193.916268 0,125.048506 C0,56.1699651 56.0487868,0 124.897643,0 C193.843469,0 250,55.9543828 250,124.940715 Z M134.59359,75 L115.266812,75 L115.266812,113.660113 L75,113.660113 L75,132.984793 L115.266812,132.984793 L115.266812,174 L134.59359,174 L134.59359,132.984793 L174,132.984793 L174,113.660113 L134.59359,113.660113 L134.59359,75 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;