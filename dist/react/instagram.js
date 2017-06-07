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
                { className: [this.props.className, 'dibsvg-svg dibsvg-instagram'].join(' '), 'data-tn': 'instagram', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M32.2,0h186c17.6,0,32.1,14.5,32.1,32.2v186c0,17.7-14.5,32.1-32.1,32.1h-186C14.5,250.2,0,235.7,0,218.1v-186C0,14.5,14.5,0,32.2,0 M182.3,27.9c-6.2,0-11.3,5.1-11.3,11.3v27c0,6.2,5.1,11.3,11.3,11.3h28.3c6.2,0,11.3-5.1,11.3-11.3v-27c0-6.2-5.1-11.3-11.3-11.3H182.3z M221.9,105.8h-22c2.1,6.8,3.2,14,3.2,21.5c0,41.7-34.8,75.3-77.8,75.3s-77.8-33.7-77.8-75.3c0-7.5,1.1-14.7,3.2-21.5H27.7v105.7c0,5.5,4.5,10,10,10h174.2c5.5,0,10-4.5,10-10V105.8z M125.3,75.9c-27.8,0-50.2,21.8-50.2,48.6s22.4,48.7,50.2,48.7s50.2-21.8,50.2-48.7S153.1,75.9,125.3,75.9' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;