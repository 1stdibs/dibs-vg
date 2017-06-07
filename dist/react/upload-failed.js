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
                { className: [this.props.className, 'dibsvg-svg dibsvg-upload-failed'].join(' '), 'data-tn': 'upload-failed', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M124.5,249.3c-68.8,0-124.8-56-124.8-124.8S55.7-0.3,124.5-0.3s124.8,56,124.8,124.8S193.3,249.3,124.5,249.3z M124.5,9.7C61.2,9.7,9.7,61.2,9.7,124.5c0,63.3,51.5,114.8,114.8,114.8c63.3,0,114.8-51.5,114.8-114.8C239.3,61.2,187.8,9.7,124.5,9.7z' }),
                React.createElement('path', { d: 'M125.1,197.2c-6.2,0-11.1-4.9-11.1-11.1c0-6.2,4.9-11.3,11.1-11.3s11.3,5.1,11.3,11.3C136.5,192.3,131.4,197.2,125.1,197.2z M126.7,155.5h-3.1c-1.4-34-8.4-77.7-8.4-84.7c0-6.2,4.1-11.9,10.1-11.9c6.1,0,10.1,5.7,10.1,11.9C135.5,77.6,128.8,121.1,126.7,155.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;