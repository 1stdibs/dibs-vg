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
                { className: [this.props.className, 'dibsvg-svg dibsvg-linkedin'].join(' '), 'data-tn': 'linkedin', viewBox: '0 0 500 500' },
                React.createElement('path', { d: 'M463,0H36.9C16.5,0,0,16.2,0,36.1v427.9C0,483.8,16.5,500,36.9,500H463c20.4,0,37-16.2,37-36.1V36.1C500,16.2,483.3,0,463,0 z M148.3,426.1H74.2V187.5h74.2V426.1z M111.2,154.9c-23.8,0-43-19.3-43-43s19.3-43,43-43s43,19.3,43,43S134.9,154.9,111.2,154.9z M426.1,426.1h-74.2V310c0-27.6-0.5-63.2-38.6-63.2c-38.6,0-44.5,30.1-44.5,61.3v118.1h-74V187.5h71.1v32.6h1 c9.9-18.8,34-38.6,70.1-38.6c75.1,0,88.9,49.4,88.9,113.7v130.8H426.1z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;