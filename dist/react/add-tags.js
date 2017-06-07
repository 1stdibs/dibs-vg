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
                { className: [this.props.className, 'dibsvg-svg dibsvg-add-tags'].join(' '), 'data-tn': 'add-tags', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M249.5,122.2c-1.4-43.5-21.1-71-37.4-86.5c-17-16.1-33.6-22.6-35.4-23.2C159.5,5,142,1.2,124.8,1.2 C69.5,1.2,34.5,39.5,32.4,42C4.5,71.3-0.6,104.2,0,126.6c0.7,24.2,7.9,41.4,8.2,42.1l0,0.1c34.7,76.2,99.3,80,111.9,80c1.5,0,2.4-0.1,2.4-0.1l1.7-0.1l125.3-124.6L249.5,122.2z M232.9,128c-23.1,2.1-92.6,15.7-105.3,104.7l-7.1,7.1c-11,0.1-71.3-3.1-104-74.7C15.7,163.3-10,99.5,38.9,48.1L39,48c0.3-0.4,34-37.8,85.8-37.8c16,0,32.3,3.6,48.4,10.6l0.3,0.1c0.2,0.1,16.1,5.9,32.4,21.4c21.5,20.3,33.1,46.6,34.5,78.3L232.9,128z' }),
                React.createElement('polygon', { points: '131,85 118,85 118,114 89,114 89,127 118,127 118,155 131,155 131,127 159,127 159,114 131,114' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;