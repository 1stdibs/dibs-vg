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
                { className: [this.props.className, 'dibsvg-svg dibsvg-bell'].join(' '), 'data-tn': 'bell', viewBox: '0 -8 45 45' },
                React.createElement('path', { d: 'M45,25.9c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-0.5-2.7-2.5-3.5-4-3.7c-0.7-0.1-2.2-0.6-2.4-1.4c-0.3-3.2-1.1-6-2.3-8.2c-1-1.8-2.4-3.3-4-4.4c-2.8-1.9-5.5-2-6-2c0,0,0,0,0,0H23V2.2h2.7V0H19v2.2h2.6V6h-3.1h0C13.6,6.1,10,8.7,7.8,13.5c-1.3,2.9-1.6,5.8-1.7,6.8l-0.1,0v0c0,0.1-0.2,1.4-2.4,1.8c-1.3,0.3-3.7,1.4-3.6,3.9c0,0.3,0.2,0.6,0.5,0.7c0.1,0,7.8,2.7,17.3,3.2c0.7,0,2.5,0.1,4.3,0.1c1.7,0,3.5,0,4.8-0.1c4.6-0.3,11.4-1.1,17.6-3.2C44.9,26.6,45.1,26.2,45,25.9z M9.2,14.1c1.9-4.3,5-6.6,9.3-6.7h7.7h0c0.3,0,2.7,0,5.2,1.7c3.2,2.1,5.1,5.8,5.6,11c-1.8,0.4-7.5,1.6-14.9,1.6c-5.1,0-10-0.6-14.6-1.6C7.7,19.1,8.1,16.6,9.2,14.1z M26.8,28.5c-2.6,0.2-7.6,0.1-8.9,0c-7.9-0.4-14.5-2.4-16.3-3c0.1-0.5,0.5-1,1.1-1.4c0.6-0.4,1.3-0.6,1.4-0.6c1.9-0.4,2.7-1.3,3.2-2c4.8,1.1,9.8,1.7,15,1.7c7.7,0,13.5-1.2,15.3-1.7c0.9,1.3,3,1.8,3.3,1.8c0,0,0,0,0,0c1.9,0.2,2.5,1.4,2.7,2.1C37.2,27.6,30.3,28.2,26.8,28.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;