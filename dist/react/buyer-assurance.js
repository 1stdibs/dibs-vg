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
                { className: [this.props.className, 'dibsvg-svg dibsvg-buyer-assurance'].join(' '), 'data-tn': 'buyer-assurance', viewBox: '0 0 518 518' },
                React.createElement('polygon', { points: '221.6,315.6 168.3,252.2 139.2,276.7 220.6,373.4 375.8,201.2 347.6,175.8    ' }),
                React.createElement('path', { d: 'M488,205.8c-7-9.7-13-28-13-40v-34.8c0-16.8-12.5-34.1-28.5-39.3l-33.1-10.7c-11.4-3.7-27-15-34-24.7l-20.4-28.1c-7.4-10.2-21-16.8-34.6-16.8c-4.1,0-7.9,0.6-11.5,1.8L279.7,24c-5.4,1.8-13.1,2.8-21,2.8c-8,0-15.6-1-21-2.8l-33.1-10.7c-3.6-1.2-7.5-1.8-11.5-1.8c-13.6,0-27.2,6.6-34.6,16.8l-20.4,28.1c-7,9.7-22.6,21-34,24.7L71,91.8c-16,5.2-28.5,22.4-28.5,39.3v34.8c0,12-5.9,30.3-13,40L9,233.9c-9.9,13.6-9.9,34.9,0,48.5l20.4,28.1c7,9.7,13,28,13,40v34.8c0,16.8,12.5,34.1,28.5,39.3l33.1,10.7c11.4,3.7,27,15,34,24.7l20.4,28.1c7.4,10.2,21,16.8,34.6,16.8c4.1,0,7.9-0.6,11.5-1.8l33.1-10.7c5.4-1.8,13.1-2.8,21-2.8c8,0,15.6,1,21,2.8l33.1,10.7c3.6,1.2,7.5,1.8,11.5,1.8c13.6,0,27.2-6.6,34.6-16.8l20.4-28.1c7-9.7,22.6-21,34-24.7l33.1-10.7c16-5.2,28.5-22.4,28.5-39.3v-34.8c0-12,6-30.3,13-40l20.4-28.1c9.9-13.6,9.9-34.9,0-48.5L488,205.8z M496.2,273.7l-20.4,28.1c-8.9,12.2-15.9,33.7-15.9,48.8v34.8c0,10.2-8.5,21.8-18.2,25l-33.1,10.7c-14.4,4.7-32.6,17.9-41.5,30.2l-20.4,28.1c-4.5,6.2-13.8,10.6-22.5,10.6c-2.5,0-4.8-0.3-6.9-1l-33.1-10.7c-6.9-2.3-16-3.5-25.7-3.5c-9.6,0-18.7,1.2-25.7,3.5L200,488.9c-2.1,0.7-4.4,1-6.9,1c-8.7,0-18-4.3-22.5-10.6l-20.4-28.1c-8.9-12.2-27.1-25.5-41.5-30.2l-33.1-10.7c-9.7-3.1-18.2-14.8-18.2-25v-34.8c0-15.1-7-36.6-15.9-48.8l-20.4-28.1c-6-8.2-6-22.7,0-30.9l20.4-28.1c8.9-12.2,15.9-33.7,15.9-48.8v-34.8c0-10.2,8.5-21.8,18.2-25l33.1-10.7c14.4-4.7,32.6-17.9,41.5-30.2l20.4-28.1c4.5-6.2,13.8-10.6,22.5-10.6c2.5,0,4.8,0.3,6.9,1l33.1,10.7c6.9,2.3,16,3.5,25.7,3.5c9.6,0,18.7-1.2,25.7-3.5l33.1-10.7c2.1-0.7,4.4-1,6.9-1c8.7,0,18,4.3,22.5,10.6l20.4,28.1c8.9,12.2,27.1,25.5,41.5,30.2l33.1,10.7c9.7,3.1,18.2,14.8,18.2,25v34.8c0,15.1,7,36.6,15.9,48.8l20.4,28.1C502.2,251,502.2,265.4,496.2,273.7z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;